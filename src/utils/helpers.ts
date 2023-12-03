import { callApi } from "./api-call";

export const IsLogin = async (): Promise<boolean> => {
  if (localStorage.accessToken !== undefined) {
    try {
      const { authorized } = await callApi({
        url: '/auth/verify', method: 'POST', data: { token: localStorage.accessToken }
      });
      return authorized;
    } catch (error) {
      return false;
    }
  }
  return false;
};
