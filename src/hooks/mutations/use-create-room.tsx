import { useMutation } from "@tanstack/react-query";
import { callApi } from "../../utils/api-call";

interface CreateRoomParams {
  requestData: any
};

export const useCreatRoom = () => {
  const mutation = useMutation({
    mutationFn: async ({ requestData }: CreateRoomParams) => await callApi({
      url: '/room', method: 'POST', data: requestData
    })
  });

  return {
    createRoom: mutation.mutate,
    ...mutation
  };
};
