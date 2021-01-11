import { CToast, CToastBody, CToastHeader, CToaster } from '@coreui/react';
import { useSelector, useDispatch } from 'react-redux';

import * as toastActions from '../stores/toast/actions';

const Toaster = () => {
  const toasters = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  return (
    <CToaster>
      {toasters.map((toast) => {
        return (
          <CToast
            key={toast.key}
            show={true}
            autohide={3000}
            fade={true}
            onStateChange={(value) => {
              if (value === false) dispatch(toastActions.delToast(toast.key));
            }}>
            <CToastHeader style={{ fontWeight: 'bold' }} closeButton={true}>
              Info
            </CToastHeader>
            <CToastBody>{toast.message}</CToastBody>
          </CToast>
        );
      })}
    </CToaster>
  );
};

export default Toaster;
