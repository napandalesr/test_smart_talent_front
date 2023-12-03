import { useQuery } from '@tanstack/react-query';

import { callApi } from '../../utils/api-call';

export const FETCH_HOTELS = 'FETCH_HOTELS';

export const useGetHotelsId = (id: number) => {
  const response = useQuery({
    queryKey: [FETCH_HOTELS],
    queryFn: async () => await callApi({ url: `/hotel/all/${id}` })
  });

  return response;
};
