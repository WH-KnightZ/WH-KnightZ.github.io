import { CREATE_TOAST, REMOVE_TOAST } from './actions';

let toastKey = 0;

export const toastsReducer = (state: { key: number; message: string }[] = [], action: any) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TOAST:
      // Not add duplicate toast
      if (state.findIndex((item: any) => item.message === payload.message) !== -1) return state;

      toastKey += 1;
      return [...state, { ...payload, key: toastKey }];

    case REMOVE_TOAST:
      return state.filter((s) => s.key !== payload);

    default:
      return state;
  }
};
