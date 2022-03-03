import { SCREENS } from 'extensions/constants';
import { SIGN_OUT } from 'store/auth/actions';
import { CHANGE_SCREEN } from './actions';

export const screenReducer = (state: string = SCREENS.AUTO_API, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_SCREEN:
      return payload;

    case SIGN_OUT:
      return SCREENS.LOGIN;

    default:
      return state;
  }
};
