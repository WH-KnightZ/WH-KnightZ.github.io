import React from 'react';
import Users from '../views/users/Users';

import { TheHeader } from './index';

const LayoutAdmin = () => {
  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <Users />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
