import { useMutation } from "@tanstack/react-query";
import { callApi } from "../../utils/api-call";

interface CreateUserParams {
  requestData: any
};

export const useCreateUser = () => {
  const mutation = useMutation({
    mutationFn: async ({ requestData }: CreateUserParams) => await callApi({
      url: '/users', method: 'POST', data: requestData
    })
  });

  return {
    createUser: mutation.mutate,
    ...mutation
  };
};
