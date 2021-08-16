import React from 'react';
import { Box } from '@material-ui/core';
import './Scrollbar.scss';

interface Props {
  sx?: any;
}

const Scrollbar: React.FC<Props> = ({ children, sx = {}, ...other }) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <div className="Scrollbar" style={{ ...sx }} {...other}>
      {children}
    </div>
  );
};

export default Scrollbar;
