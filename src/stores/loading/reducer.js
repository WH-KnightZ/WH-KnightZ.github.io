const initialState = true;

export const loadingReducer = (state = initialState, action) => {
  if (action.type.includes('REQUEST')) return true;
  return false;
};
