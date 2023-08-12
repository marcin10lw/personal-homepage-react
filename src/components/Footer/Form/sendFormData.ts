import axios from 'axios';

import { FormData } from './types';

export const sendFormData = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return await axios.post(
    'https://personal-homepage-395622.lm.r.appspot.com/api/sendmail',
    formData,
  );
};
