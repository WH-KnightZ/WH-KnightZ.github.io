import { takeLatest, call, put } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  GET_PROFILE_REQUEST,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMIN_FAILURE,
  LOGOUT_ADMIN_SUCCESS,
  LOGOUT_ADMIN_FAILURE,
  LOGIN_ADMIN_REQUEST,
  LOGOUT_ADMIN_REQUEST,
  FORCE_CHANGE_PASSWORD_REQUEST,
} from './actions';

import * as toastActions from '../toast/actions';

import axios from 'axios';
import config from '../../config';
import { push } from 'react-router-redux';
import { ls, jwt } from '../../extensions';

const login = (data) => {
  return axios.post(config.rest.signInUser(), data, {
    headers: {
      'content-type': 'application/json',
    },
  });
};

const logout = (accessToken) => {
  return axios.get(config.rest.signOutUser(), {
    headers: {
      'content-type': 'application/json',
      Authorization: accessToken,
    },
  });
};

const getProfile = (data) => {
  return axios.post(config.rest.getProfile(), data, {
    headers: {
      'content-type': 'application/json',
    },
  });
};

const loginAdmin = (data) => {
  return axios.post(config.rest.signInAdmin(), data, {
    headers: {
      'content-type': 'application/json',
    },
  });
};

const logoutAdmin = (accessToken) => {
  return axios.get(config.rest.signOutAdmin(), {
    headers: {
      'content-type': 'application/json',
      Authorization: accessToken,
    },
  });
};

const forceChangePassword = (data) => {
  return axios.post(config.rest.forceChangePassword(), data, {
    headers: { 'content-type': 'application/json' },
  });
};

function* workerLogin(action) {
  try {
    const response = yield call(() => login(action.payload));
    const data = response.data;

    if (!data.message.status) throw new Error(data.message.text);

    const parsePayload = JSON.parse(action.payload);
    const dataExtra = { ...data.data, email: parsePayload.email };

    yield put({ type: LOGIN_SUCCESS, payload: dataExtra });
    yield put(toastActions.addToast(data.message.text));
    const newData = data.data;
    if (newData.challengename) {
      yield put(push('/changePassword'));
      ls.set('session', newData.session);
    } else {
      const dataEncoded = jwt.sign(dataExtra, config.app.secretKey, {
        expiresIn: config.app.expiresIn,
      });
      ls.set('data', dataEncoded);
      yield put(push('/'));
    }
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, error });
    yield put(toastActions.addToast(error.toString()));
  }
}

function* workerLogout(action) {
  try {
    const response = yield call(() => logout(action.payload));
    const data = response.data;

    ls.clear();
    yield put({ type: LOGOUT_SUCCESS });
    yield put(toastActions.addToast(data.message.text));
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, error });
    yield put(toastActions.addToast(error.toString()));
  }
}

function* workerGetProfile(action) {
  try {
    const response = yield call(() => getProfile(action.payload));
    const data = response.data;
    yield put({ type: LOGIN_SUCCESS, payload: data.data });
    if (data.data.group_name === 'admin') yield put(push(config.routes.managerUsers()));
  } catch (error) {
    yield put({ type: LOGIN_FAILURE });
  }
}

function* workerLoginAdmin(action) {
  try {
    const response = yield call(() => loginAdmin(action.payload));
    const data = response.data;

    if (!data.message.status) throw new Error(data.message.text);

    const parsePayload = JSON.parse(action.payload);
    const dataExtra = { ...data.data, email: parsePayload.email };

    yield put({ type: LOGIN_ADMIN_SUCCESS, payload: dataExtra });
    yield put(toastActions.addToast(data.message.text));
    const newData = data.data;
    if (newData.challengename) {
      yield put(push('/changePassword'));
      ls.set('session', newData.session);
    } else {
      const dataEncoded = jwt.sign(dataExtra, config.app.secretKey, {
        expiresIn: config.app.expiresIn,
      });
      ls.set('data', dataEncoded);
      yield put(push(config.routes.managerUsers()));
    }
  } catch (error) {
    yield put({ type: LOGIN_ADMIN_FAILURE, error });
    yield put(toastActions.addToast(error.toString()));
  }
}

function* workerLogoutAdmin(action) {
  try {
    const response = yield call(() => logoutAdmin(action.payload));
    const data = response.data;

    ls.clear();
    yield put({ type: LOGOUT_ADMIN_SUCCESS });
    yield put(toastActions.addToast(data.message.text));
    yield put(push('/loginAdmin'));
  } catch (error) {
    yield put({ type: LOGOUT_ADMIN_FAILURE, error });
    yield put(toastActions.addToast(error.toString()));
  }
}

function* workerForceChangePassword(action) {
  try {
    const response = yield call(() => forceChangePassword(action.payload));
    const data = response.data;

    const parsePayload = action.payload;
    const dataExtra = { ...data.data, email: parsePayload.email };

    const dataEncoded = jwt.sign(dataExtra, config.app.secretKey, {
      expiresIn: config.app.expiresIn,
    });
    ls.set('data', dataEncoded);

    console.log(dataExtra);

    if (data.data.group_name !== 'admin') {
      yield put({ type: LOGIN_SUCCESS, payload: dataExtra });
      yield put(push('/'));
    } else {
      yield put({ type: LOGIN_ADMIN_SUCCESS, payload: dataExtra });
      yield put(push(config.routes.managerUsers()));
    }

    yield put(toastActions.addToast(data.message.text));
  } catch (err) {
    yield put(toastActions.addToast(err.toString()));
  }
}

export function* watcherLogin() {
  yield takeLatest(LOGIN_REQUEST, workerLogin);
}

export function* watcherLogout() {
  yield takeLatest(LOGOUT_REQUEST, workerLogout);
}

export function* watcherGetProfile() {
  yield takeLatest(GET_PROFILE_REQUEST, workerGetProfile);
}

export function* watcherLoginAdmin() {
  yield takeLatest(LOGIN_ADMIN_REQUEST, workerLoginAdmin);
}

export function* watcherLogoutAdmin() {
  yield takeLatest(LOGOUT_ADMIN_REQUEST, workerLogoutAdmin);
}

export function* watcherForceChangePassword() {
  yield takeLatest(FORCE_CHANGE_PASSWORD_REQUEST, workerForceChangePassword);
}
