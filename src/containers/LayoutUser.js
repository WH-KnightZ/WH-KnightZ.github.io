import React from 'react';
import PageStreaming from '../views/pages/pageStreaming/PageStreaming';

import { TheHeader } from './index';

const LayoutUser = () => {
  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <PageStreaming />
        </div>
      </div>
    </div>
  );
};

export default LayoutUser;
