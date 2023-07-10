const mapping: Record<string, string> = {
  data: 'data',
  organizations: 'organization',
  users: 'user',
  websites: 'website',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
