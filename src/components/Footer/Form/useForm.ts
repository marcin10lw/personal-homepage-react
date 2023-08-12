import { useState } from 'react';

import { sendFormData } from './sendFormData';
import { FetchStatus } from './types';

const useForm = () => {
  const formDataInitialState = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(formDataInitialState);
  const [status, setStatus] = useState<FetchStatus>('idle');

  const isEveryFieldFilled = Object.values(formData).every(
    (value) => value.trim() !== '',
  );

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!isEveryFieldFilled) return;

    setStatus('loading');

    try {
      await sendFormData(formData);
      setStatus('success');
      setFormData(formDataInitialState);
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return {
    formData,
    status,
    onInputChange,
    onFormSubmit,
  };
};

export default useForm;
