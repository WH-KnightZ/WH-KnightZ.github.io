import { SHOW_MODAL_CONFIRM, HIDE_MODAL_CONFIRM } from './actions';

const initialState: any = { show: false, title: '', content: '' };

export const modalConfirmReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SHOW_MODAL_CONFIRM:
      return { ...action.payload, show: true };

    case HIDE_MODAL_CONFIRM:
      return { ...state, show: false };

    default:
      return state;
  }
};
