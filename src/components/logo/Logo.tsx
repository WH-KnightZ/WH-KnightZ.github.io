import React from 'react';
import { Box } from '@material-ui/core';
import { logo } from 'extensions/extensions';

interface Props {
  sx?: any;
}

const Logo: React.FC<Props> = ({ sx }) => {
  return <Box component="img" src={logo} sx={{ width: 60, height: 40, ...sx }} />;
};

export default Logo;
