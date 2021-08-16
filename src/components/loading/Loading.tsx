import React from 'react';
import { useSelector } from 'react-redux';
import { loading } from 'extensions/extensions';
import { RootState } from 'store';

const Loading: React.FC = () => {
  const { loadingCount } = useSelector((state: RootState) => state.loading);

  return <div style={{ display: !!loadingCount ? 'block' : 'none' }}>{loading}</div>;
};

export default Loading;
