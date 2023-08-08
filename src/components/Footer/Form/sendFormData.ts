import axios from 'axios';

import { FormData } from './types';

export const sendFormData = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return await axios.post('http://localhost:5000/api/sendmail', formData);
};
