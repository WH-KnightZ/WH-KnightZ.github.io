import React from 'react';
import { Popover } from '@material-ui/core';
import './MenuPopover.scss';

interface Props {
  sx?: any;
  open: boolean;
  [key: string]: any;
}

const MenuPopover: React.FC<Props> = ({ children, sx, ...other }) => {
  return (
    <Popover
      className="MenuPopover"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        sx: {
          mt: 1.5,
          ml: 0.5,
          overflow: 'inherit',
          boxShadow: (theme: any) => theme.customShadows.z20,
          border: (theme: any) => `solid 1px ${theme.palette.grey[500_8]}`,
          width: 200,
          ...sx,
        },
      }}
      {...other}>
      <span className="MenuPopover-arrow" />
      {children}
    </Popover>
  );
};

export default MenuPopover;
