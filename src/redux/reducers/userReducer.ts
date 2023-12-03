import { types } from '../types';

export const userReducer = (state = {}, action: any): any => {
  switch (action.type) {
    case types.user: {
      console.log("payload", action.payload);
      const user = action.payload;
      return {
        ...state,
        user
      };
    }
    default:
      return state;
  }
};
