import { useQuery } from '@tanstack/react-query';

import { callApi } from '../../utils/api-call';

export const FETCH_HOTEL = 'FETCH_HOTEL';

export const useGetHotelByID = (id: number) => {
  const response = useQuery({
    queryKey: [FETCH_HOTEL],
    queryFn: async () => await callApi({ url: `/hotel/${id}` })
  });

  return response;
};
