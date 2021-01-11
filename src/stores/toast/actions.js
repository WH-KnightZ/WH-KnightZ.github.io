export const ADD_TOAST = 'ADD_TOAST';
export const DEL_TOAST = 'DEL_TOAST';

export const addToast = (message) => {
  return { type: ADD_TOAST, payload: message };
};

export const delToast = (key) => {
  return { type: DEL_TOAST, payload: key };
};
