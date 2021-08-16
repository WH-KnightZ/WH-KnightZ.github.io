import { useMemo } from 'react';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  hideModalConfirm,
  RootState,
  showModalConfirm,
  signIn,
  signOut,
  startLoading,
  stopLoading,
  updateProfile,
} from 'store';
import { ApiInputType, ApiOutputType, callApiAction } from 'store/callApi/actions';
import { createToast, removeToast, ToastType } from 'store/toasts/actions';

export const useAuth = () => {
  const dispatch = useDispatch();
  const authReducer = useSelector((state: RootState) => state.auth, shallowEqual);

  return useMemo(
    () => ({
      ...authReducer,
      updateProfile: (payload: any) => dispatch(updateProfile(payload)),
      signIn: (payload: any) => dispatch(signIn(payload)),
      signOut: () => dispatch(signOut()),
    }),
    [dispatch, authReducer],
  );
};

export const useLoading = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => ({
      startLoading: () => dispatch(startLoading()),
      stopLoading: () => dispatch(stopLoading()),
    }),
    [dispatch],
  );
};

export const useApi = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => ({
      callApi: (payload: ApiInputType, callback?: (result: ApiOutputType) => void) =>
        dispatch(callApiAction(payload, callback)),
    }),
    [dispatch],
  );
};

export const useModalConfirm = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => ({
      showModalConfirm: (payload: {
        title: string;
        content: string;
        confirm?: { text: string; action: any };
        cancel?: { text: string; action: any };
      }) => dispatch(showModalConfirm(payload)),
      hideModalConfirm: () => dispatch(hideModalConfirm()),
    }),
    [dispatch],
  );
};

export const useToasts = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => ({
      createToast: (payload: ToastType) => dispatch(createToast(payload)),
      removeToast: (key: number) => dispatch(removeToast(key)),
    }),
    [dispatch],
  );
};
