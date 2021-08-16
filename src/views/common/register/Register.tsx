import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Page, AuthLayout } from 'components';

const Register: React.FC<RouteComponentProps> = () => {
  return (
    <Page title="Register">
      <AuthLayout isRegister />
    </Page>
  );
};

export default Register;
