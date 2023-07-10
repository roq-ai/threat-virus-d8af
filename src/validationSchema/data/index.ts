import * as yup from 'yup';

export const dataValidationSchema = yup.object().shape({
  content: yup.string().required(),
  website_id: yup.string().nullable(),
});
