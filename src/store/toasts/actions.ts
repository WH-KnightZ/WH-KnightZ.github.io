export const CREATE_TOAST = 'CREATE_TOAST';
export const REMOVE_TOAST = 'REMOVE_TOAST';

export type ToastType = {
  message?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
};

export const createToast = (payload: ToastType) => {
  return { type: CREATE_TOAST, payload };
};

export const removeToast = (key: number) => {
  return { type: REMOVE_TOAST, payload: key };
};
