import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@material-ui/core';

interface Props extends ButtonProps {
  loading: boolean;
  [key: string]: any;
}

const LoadingButton: React.FC<Props> = ({ loading, children, disabled, ...rest }) => {
  return (
    <Button disabled={loading || disabled} {...rest}>
      {loading ? <CircularProgress size={24} color="inherit" /> : children}
    </Button>
  );
};

export default LoadingButton;
