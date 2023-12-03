import { useMutation } from '@tanstack/react-query';
import { callApi } from '../../utils/api-call';

interface CreateAuthParams {
  requestData: any
};

export const useAuth = () => {
  const mutation = useMutation({
    mutationFn: async ({ requestData }: CreateAuthParams) => await callApi({
      url: '/auth/login', method: 'POST', data: requestData
    })
  });

  return {
    authentication: mutation.mutate,
    ...mutation
  };
};
