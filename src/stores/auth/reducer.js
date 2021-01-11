import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_ADMIN_SUCCESS,
  LOGOUT_ADMIN_SUCCESS,
} from './actions';

const initialState = {};

export const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_SUCCESS:
    case LOGIN_ADMIN_SUCCESS:
      return { ...action.payload };
    case LOGOUT_SUCCESS:
    case LOGOUT_ADMIN_SUCCESS:
      return {};

    default:
      return state;
  }
};
