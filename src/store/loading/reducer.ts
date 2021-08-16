import { START_LOADING, STOP_LOADING } from './actions';

const initialState = {
  loadingCount: 0,
};

export const loadingReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loadingCount: state.loadingCount + 1 };

    case STOP_LOADING: {
      return { ...state, loadingCount: Math.max(state.loadingCount - 1, 0) };
    }

    default:
      return state;
  }
};
