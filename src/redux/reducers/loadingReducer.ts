import { types } from '../types';

interface initialStateProps {
  loading: false
}

const initialState: initialStateProps = {
  loading: false
};

export const loadingReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case types.loading: {
      const loading = action.payload;
      return {
        ...state,
        loading
      };
    }
    default:
      return state;
  }
};
