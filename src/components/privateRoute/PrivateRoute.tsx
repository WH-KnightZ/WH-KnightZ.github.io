import { useAuth } from 'extensions/hooks';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  component: any;
  location?: any;
  path: string;
  exact?: boolean;
  role?: 'admin' | 'user';
}

const PrivateRoute: React.FC<Props> = (props) => {
  const auth = useAuth();
  const { component, location, role = 'user' } = props;

  switch (role) {
    case 'admin':
      if (!auth.is_admin)
        return (
          <Redirect
            to={{
              pathname: '/404',
              state: { from: location },
            }}
          />
        );
      break;

    case 'user':
      if (!auth.email)
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      break;
  }

  return <Route {...props} component={component} />;
};

export default PrivateRoute;
