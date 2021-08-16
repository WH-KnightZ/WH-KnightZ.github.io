import { SIGN_IN, SIGN_OUT, REFRESH_TOKEN, UPDATE_PROFILE } from './actions';

const initialState: any = {
  email: 'khanh.nguyen@boot.ai',
  full_name: 'Khánh Nguyễn',
  avatar_url: 'https://essaha.info/wp-content/uploads/2019/11/alan-walker2.jpg',
};

export const authReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...action.payload };

    case SIGN_OUT:
      return {};

    case REFRESH_TOKEN:
    case UPDATE_PROFILE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
