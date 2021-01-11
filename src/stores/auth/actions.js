export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const LOGIN_ADMIN_REQUEST = 'LOGIN_ADMIN_REQUEST';
export const LOGIN_ADMIN_SUCCESS = 'LOGIN_ADMIN_SUCCESS';
export const LOGIN_ADMIN_FAILURE = 'LOGIN_ADMIN_FAILURE';
export const LOGOUT_ADMIN_REQUEST = 'LOGOUT_ADMIN_REQUEST';
export const LOGOUT_ADMIN_SUCCESS = 'LOGOUT_ADMIN_SUCCESS';
export const LOGOUT_ADMIN_FAILURE = 'LOGOUT_ADMIN_FAILURE';
export const FORCE_CHANGE_PASSWORD_REQUEST = 'FORCE_CHANGE_PASSWORD_REQUEST';
export const FORCE_CHANGE_PASSWORD_SUCCESS = 'FORCE_CHANGE_PASSWORD_SUCCESS';
export const FORCE_CHANGE_PASSWORD_FAILURE = 'FORCE_CHANGE_PASSWORD_FAILURE';

export const login = (payload) => {
  return { type: LOGIN_REQUEST, payload };
};

export const logout = (payload) => {
  return { type: LOGOUT_REQUEST, payload };
};

export const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

export const getProfile = (payload) => {
  return { type: GET_PROFILE_REQUEST, payload };
};

export const loginFailure = () => {
  return { type: LOGIN_FAILURE };
};

export const loginAdmin = (payload) => {
  return { type: LOGIN_ADMIN_REQUEST, payload };
};

export const logoutAdmin = (payload) => {
  return { type: LOGOUT_ADMIN_REQUEST, payload };
};

export const forceChangePassword = (payload) => {
  return { type: FORCE_CHANGE_PASSWORD_REQUEST, payload };
};