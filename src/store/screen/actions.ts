export const CHANGE_SCREEN = 'CHANGE_SCREEN';

export const changeScreen = (payload: string) => {
  return { type: CHANGE_SCREEN, payload };
};
