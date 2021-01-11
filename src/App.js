import React, { useEffect, useState, Suspense } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './scss/style.scss';
import PrivateRoute from './privateRoutes/PrivateRoute';
import PrivateRouteAdmin from './privateRoutes/PrivateRouteAdmin';
import { useDispatch } from 'react-redux';
import * as authActions from './stores/auth/actions';
import { CSpinner } from '@coreui/react';

import { ls, jwt } from './extensions';
import config, { adminRouteBase } from './config';
import Loading from './components/Loading';
import Toaster from './components/Toaster';

const loading = (
  <div className="spin--loading">
    <CSpinner color="info" style={{ width: '6rem', height: '6rem' }} />
  </div>
);

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const LoginAdmin = React.lazy(() => import('./views/pages/loginAdmin/LoginAdmin'));
const ChangePassword = React.lazy(() => import('./views/pages/changePassword/ChangePassword'));
const ConfirmEmail = React.lazy(() => import('./views/resetPassword/ConfirmEmail'));
const LayoutUser = React.lazy(() => import('./containers/LayoutUser'));
const LayoutAdmin = React.lazy(() => import('./containers/LayoutAdmin'));

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [isFirstLoading, setIsFirstLoading] = useState(true);

  useEffect(() => {
    const data = ls.get('data');
    if (data) {
      try {
        const decoded = jwt.verify(data, config.app.secretKey);
        dispatch(authActions.loginSuccess(decoded));
        if (decoded.group_name === 'admin' && !location.pathname.includes(adminRouteBase))
          history.push(config.routes.managerUsers());
      } catch (err) {
        console.log(err.toString());
        dispatch(authActions.loginFailure());
      }
    } else dispatch(authActions.loginFailure());
    setIsFirstLoading(false);
    // const access_token = ls.get('access_token');
    // if (access_token) dispatch(authActions.getProfile({ token: access_token }));
    // else dispatch(authActions.loginFailure());
  }, []);

  if (isFirstLoading) return <div>{loading}</div>;

  console.log('App');

  return (
    <Suspense fallback={loading}>
      <Loading />
      <Toaster />

      <Switch>
        <Route
          exact
          path="/resetPassword"
          name="Reset Password"
          render={(props) => <ConfirmEmail {...props} />}
        />
        <Route
          exact
          path="/changePassword"
          name="Change Password"
          render={(props) => <ChangePassword {...props} />}
        />
        <Route exact path="/login" name="Login Pages" render={(props) => <Login {...props} />} />
        <Route
          exact
          path="/loginAdmin"
          name="Login Pages"
          render={(props) => <LoginAdmin {...props} />}
        />
        <Route
          exact
          path="/register"
          name="Register Page"
          render={(props) => <Register {...props} />}
        />
        <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
        <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
        <PrivateRouteAdmin
          // exact
          path={config.routes.managerUsers()}
          name="Users"
          render={(props) => <LayoutAdmin {...props} />}
        />
        <PrivateRoute
          path="/"
          name="Streaming"
          render={(props) => <LayoutUser {...props} />}
        />
      </Switch>
    </Suspense>
  );
};

export default App;
