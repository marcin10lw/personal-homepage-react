import axios from 'axios';

import { FormData } from './types';

export const sendFormData = async (formData: FormData) => {
  return await axios.post('http://localhost:3001/api/submit-form', formData);
};
