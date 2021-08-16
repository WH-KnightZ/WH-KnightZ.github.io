import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Page, AuthLayout } from 'components';

const Login: React.FC<RouteComponentProps> = () => {
  return (
    <Page title="Login">
      <AuthLayout />
    </Page>
  );
};

export default Login;
