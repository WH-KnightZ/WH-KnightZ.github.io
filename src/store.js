import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { loadingReducer } from './stores/loading/reducer';
import { authReducer } from './stores/auth/reducer';
import { toastReducer } from './stores/toast/reducer';
import {
  watcherLogin,
  watcherLogout,
  // watcherGetProfile,
  watcherLoginAdmin,
  watcherLogoutAdmin,
  watcherForceChangePassword,
} from './stores/auth/saga';
import { all } from 'redux-saga/effects';
import { routerMiddleware } from 'react-router-redux';

export const history = require('history').createBrowserHistory();

const reduxRouterMiddleware = routerMiddleware(history);

const rootReducer = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  toast: toastReducer
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    watcherLogin(),
    watcherLogout(),
    // watcherGetProfile(),
    watcherLoginAdmin(),
    watcherLogoutAdmin(),
    watcherForceChangePassword(),
  ]);
}

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, reduxRouterMiddleware)
);

sagaMiddleware.run(rootSaga);
