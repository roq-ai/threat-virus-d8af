import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { websiteValidationSchema } from 'validationSchema/websites';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.website
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getWebsiteById();
    case 'PUT':
      return updateWebsiteById();
    case 'DELETE':
      return deleteWebsiteById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getWebsiteById() {
    const data = await prisma.website.findFirst(convertQueryToPrismaUtil(req.query, 'website'));
    return res.status(200).json(data);
  }

  async function updateWebsiteById() {
    await websiteValidationSchema.validate(req.body);
    const data = await prisma.website.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteWebsiteById() {
    const data = await prisma.website.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
