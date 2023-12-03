import { useMutation } from "@tanstack/react-query";
import { callApi } from "../../utils/api-call";

interface CreateHotelParams {
  requestData: any
};

export const useCreatHotel = () => {
  const mutation = useMutation({
    mutationFn: async ({ requestData }: CreateHotelParams) => await callApi({
      url: '/hotel', method: 'POST', data: requestData
    })
  });

  return {
    createHotel: mutation.mutate,
    ...mutation
  };
};
