import { CALL_API } from './actions';

const initialState = {};

export const callApiReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case CALL_API:
      return action.payload;

    default:
      return state;
  }
};
