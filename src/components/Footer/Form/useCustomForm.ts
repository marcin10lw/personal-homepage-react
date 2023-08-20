import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType, z } from 'zod';

import { sendFormData } from './sendFormData';
import { FetchStatus, FormData } from './types';

const formDataInitialState: FormData = {
  name: '',
  email: '',
  message: '',
};

const schema: ZodType<FormData> = z.object({
  name: z.string().trim().min(1, { message: 'Name is required' }),
  email: z.string().email(),
  message: z.string().trim().min(1, { message: 'Message is required' }),
});

const useCustomForm = () => {
  const [status, setStatus] = useState<FetchStatus>('idle');
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: formDataInitialState,
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const onFormSubmit = async (formValues: FormData) => {
    setStatus('loading');

    try {
      await sendFormData(formValues);
      setStatus('success');
      reset();
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return {
    status,
    errors,
    register,
    handleSubmit,
    onFormSubmit,
  };
};

export default useCustomForm;
