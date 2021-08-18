import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { loading } from 'extensions/extensions';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ModalConfirm, ToastContainer } from 'components';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Layout = React.lazy(() => import('views/containers/Layout'));

const App: React.FC = () => {
  const modalConfirm = useSelector((state: RootState) => state.modalConfirm);

  return (
    <>
      <ModalConfirm {...modalConfirm} />
      <ToastContainer />
      <MessengerCustomerChat pageId="102058578863470" appId="1995725250604441" htmlRef="<REF_STRING>" />
      <Suspense fallback={loading}>
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
