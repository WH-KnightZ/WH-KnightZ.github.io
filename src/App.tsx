import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { loading } from 'extensions/extensions';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ModalConfirm, ToastContainer } from 'components';

// Admin
const LayoutAdmin = React.lazy(() => import('views/admin/containers/Layout'));

const App: React.FC = () => {
  const modalConfirm = useSelector((state: RootState) => state.modalConfirm);

  return (
    <>
      <ModalConfirm {...modalConfirm} />
      <ToastContainer />
      <Suspense fallback={loading}>
        <Switch>
          <Route path="/" component={LayoutAdmin} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
