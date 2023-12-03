import { useQuery } from '@tanstack/react-query';

import { callApi } from '../../utils/api-call';

export const FETCH_HOTELS = 'FETCH_HOTELS';

export const useGetHotels = () => {
  const response = useQuery({
    queryKey: [FETCH_HOTELS],
    queryFn: async () => await callApi({ url: `/hotel` })
  });

  return response;
};
