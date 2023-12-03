import { types } from "../types";

export const _loading = (options: any): any => ({
  type: types.loading,
  payload: options
});
