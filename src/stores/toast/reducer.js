import { ADD_TOAST, DEL_TOAST } from './actions';

const initialState = [];

let toastKey = 0;

export const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOAST:
      toastKey += 1;
      return [...state, { key: toastKey, message: action.payload }];
    case DEL_TOAST:
      return state.filter((s) => s.key != action.payload);
    default:
      return state;
  }
};
