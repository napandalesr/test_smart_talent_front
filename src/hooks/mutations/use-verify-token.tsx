import { useMutation } from '@tanstack/react-query';
import { callApi } from '../../utils/api-call';

export const FETCH_TOKEN = 'FETCH_TOKEN';

export const useVerifyToken = (token: string) => {
  console.log("token", token);
  const mutation = useMutation({
    mutationFn: async () => await callApi({
      url: '/auth/verify', method: 'POST', data: token
    })
  });

  return {
    authentication: mutation.mutate,
    ...mutation
  };
};
