import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { loading } from 'extensions/extensions';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ModalConfirm, ToastContainer } from 'components';

const Layout = React.lazy(() => import('views/containers/Layout'));

const App: React.FC = () => {
  const modalConfirm = useSelector((state: RootState) => state.modalConfirm);

  return (
    <>
      <ModalConfirm {...modalConfirm} />
      <ToastContainer />
      <Suspense fallback={loading}>
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
