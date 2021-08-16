export const SHOW_MODAL_CONFIRM = 'SHOW_MODAL_CONFIRM';
export const HIDE_MODAL_CONFIRM = 'HIDE_MODAL_CONFIRM';

export const showModalConfirm = (payload: {
  title: string;
  content: string;
  confirm?: { text: string; action: any };
  cancel?: { text: string; action: any };
}) => {
  return { type: SHOW_MODAL_CONFIRM, payload };
};

export const hideModalConfirm = () => {
  return { type: HIDE_MODAL_CONFIRM };
};
