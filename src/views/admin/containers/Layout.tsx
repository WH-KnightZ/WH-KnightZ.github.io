import React, { Suspense } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { loading } from 'extensions/extensions';
import './Layout.scss';
import DashboardBar from './DashboardBar';

const Users = React.lazy(() => import('../users/Users'));

const Layout: React.FC<RouteComponentProps> = (props) => {
  return (
    <div className="LayoutAdmin">
      <DashboardBar />

      <div className="LayoutAdmin-main">
        <Suspense fallback={loading}>
          <Switch>
            <Route path="/" exact component={Users} />
            <Redirect from="/" to="/" />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
