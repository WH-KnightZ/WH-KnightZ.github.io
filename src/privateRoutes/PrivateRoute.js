import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const groupName = useSelector((state) => state.auth.group_name);

  const myRender = () => {
    if (!groupName)
      return () => (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      );
    if (groupName === 'admin')
      return () => (
        <Redirect
          to={{
            pathname: '/404',
            state: { from: props.location },
          }}
        />
      );
    return props.render;
  };

  return <Route {...props} render={myRender()} />;
};

export default PrivateRoute;
