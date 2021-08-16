import { START_LOADING, STOP_LOADING } from './actions';

export const loadingReducer = (state = false, action: { type: string }) => {
  switch (action.type) {
    case START_LOADING:
      return true;

    case STOP_LOADING: {
      return false;
    }

    default:
      return state;
  }
};
