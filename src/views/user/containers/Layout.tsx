import React, { Suspense } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { loading } from 'extensions/extensions';
import './Layout.scss';

const Home = () => <div>Home</div>;

const Layout: React.FC<RouteComponentProps> = () => {
  return (
    <div className="LayoutUser">
      <Suspense fallback={loading}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect from="/" to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Layout;
