import { createStore, applyMiddleware, combineReducers } from 'redux';
import { authReducer } from './auth/reducer';
import { toastsReducer } from './toasts/reducer';
import { routerMiddleware } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';
import { callApiReducer } from './callApi/reducer';
import { loadingReducer } from './loading/reducer';
import { modalConfirmReducer } from './modalConfirm/reducer';
import { screenReducer } from './screen/reducer';

export const history = require('history').createBrowserHistory();
export { signIn, signOut, refreshToken, updateProfile } from './auth/actions';
export { createToast, removeToast } from './toasts/actions';
export { startLoading, stopLoading } from './loading/actions';
export { callApiAction } from './callApi/actions';
export { showModalConfirm, hideModalConfirm } from './modalConfirm/actions';
export { changeScreen } from './screen/actions';

const reduxRouterMiddleware = routerMiddleware(history);

const rootReducer = combineReducers({
  auth: authReducer,
  toasts: toastsReducer,
  callApi: callApiReducer,
  loading: loadingReducer,
  modalConfirm: modalConfirmReducer,
  screen: screenReducer,
});

/**
 * Export type root of Reducer
 */
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(reduxRouterMiddleware, ReduxThunk));
