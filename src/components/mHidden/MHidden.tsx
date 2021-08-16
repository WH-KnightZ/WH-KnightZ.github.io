import React from 'react';
import { useMediaQuery } from '@material-ui/core';

interface Props {
  children: any;
  width: 'xsDown' | 'smDown' | 'mdDown' | 'lgDown' | 'xlDown' | 'xsUp' | 'smUp' | 'mdUp' | 'lgUp' | 'xlUp';
}

const MHidden: React.FC<Props> = ({ width, children }) => {
  const breakpoint = width.substring(0, 2);

  const hiddenUp = useMediaQuery((theme: any) => theme.breakpoints.up(breakpoint));
  const hiddenDown = useMediaQuery((theme: any) => theme.breakpoints.down(breakpoint));

  if (width.includes('Down')) {
    return hiddenDown ? null : children;
  }

  if (width.includes('Up')) {
    return hiddenUp ? null : children;
  }

  return null;
};

export default MHidden;
