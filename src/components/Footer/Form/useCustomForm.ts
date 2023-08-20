import { useState } from 'react';
import { FetchStatus } from './types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { sendFormData } from './sendFormData';

const schema = z.object({
  name: z.string().trim().min(1, { message: 'Name is required' }),
  email: z.string().email(),
  message: z.string().trim().min(1, { message: 'Message is required' }),
});

const formDataInitialState = {
  name: '',
  email: '',
  message: '',
};

const useCustomForm = () => {
  const [status, setStatus] = useState<FetchStatus>('idle');
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: formDataInitialState,
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const onFormSubmit = async (formValues: typeof formDataInitialState) => {
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
