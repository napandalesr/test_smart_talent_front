import { useMutation } from "@tanstack/react-query";
import { callApi } from "../../utils/api-call";

interface CreateBookingParams {
  requestData: any
};

export const useCreateBooking = () => {
  const mutation = useMutation({
    mutationFn: async ({ requestData }: CreateBookingParams) => await callApi({
      url: '/guest', method: 'POST', data: requestData
    })
  });

  return {
    createBooking: mutation.mutate,
    ...mutation
  };
};
