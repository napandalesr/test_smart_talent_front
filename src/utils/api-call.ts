import axios, { type Method, type ResponseType, type AxiosInstance, type AxiosResponse, type AxiosError } from 'axios';

const REQUEST_TIMEOUT = 180000;

let requestClient: AxiosInstance;

export const init = (baseURL: string): AxiosInstance => {
  requestClient = axios.create({
    baseURL,
    timeout: REQUEST_TIMEOUT
  });

  return requestClient;
};

export const callApi = async ({
  url,
  method = 'GET',
  params = undefined,
  data = undefined,
  timeout = REQUEST_TIMEOUT,
  responseType = 'json',
  headers = {}
}: CallApi): Promise<any> => {
  const config = {
    url,
    method,
    params,
    data,
    headers: {
      ...headers,
      Authorization: `Bearer ${localStorage.getItem('accessToken') ?? ''}`
    },
    timeout,
    responseType
  };

  return await requestClient
    .request(config)
    .then((response: AxiosResponse) => {
      if (response?.headers?.['content-type']?.indexOf('application/json') === 1) {
        return response;
      }

      const resp = response.data;

      if (resp && typeof resp.data !== 'undefined') {
        return resp.data;
      }

      return resp;
    })
    .catch(async (thrown: AxiosError) => {
      if (thrown?.response?.status === 401) {
        logout();
      }
    });
};

export interface CallApi {
  url: string
  data?: any
  params?: any
  headers?: any
  method?: Method
  timeout?: number
  responseType?: ResponseType
}

const logout = (): void => {
  localStorage.clear();
  location.href = '/';
};
