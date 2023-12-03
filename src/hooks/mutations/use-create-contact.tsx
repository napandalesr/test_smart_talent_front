import { useMutation } from "@tanstack/react-query";
import { callApi } from "../../utils/api-call";

interface CreateContactParams {
  requestData: any
};

export const useCreateContact = () => {
  const mutation = useMutation({
    mutationFn: async ({ requestData }: CreateContactParams) => await callApi({
      url: '/contactemergency', method: 'POST', data: requestData
    })
  });

  return {
    createContact: mutation.mutate,
    ...mutation
  };
};
