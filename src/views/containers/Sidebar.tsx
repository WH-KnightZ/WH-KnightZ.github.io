import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import { Box, Link, Drawer, Typography, Avatar, Stack, FormLabel } from '@material-ui/core';
import { MHidden, NavSection, Scrollbar } from 'components';
import { useAuth } from 'extensions/hooks';
import { imgLogo } from 'extensions/extensions';
import { SCREENS } from 'extensions/constants';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const sidebarConfig = [
  {
    title: 'Đăng Nhập',
    path: SCREENS.LOGIN,
    icon: 'account_circle',
  },
  {
    title: 'Auto Book',
    path: SCREENS.AUTO_BOOK,
    icon: 'book_online',
  },
  {
    title: 'Chưa Nghĩ Ra',
    path: SCREENS.MORE,
    icon: 'more_time',
  },
];

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled('div')(({ theme }: any) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200],
}));

interface Props {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
}

const Sidebar: React.FC<Props> = ({ isOpenSidebar, onCloseSidebar }) => {
  const auth = useAuth();
  const screen = useSelector((state: RootState) => state.screen);

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: '100%',
        // '& .simplebar-content': { height: '100%', display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3 }}></Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={auth.avatar_url} alt="avatar" />
            <Box sx={{ ml: 2 }} style={{ overflow: 'hidden' }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {auth.full_name}
              </Typography>
              <Typography
                style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                variant="body2"
                sx={{ color: 'text.secondary' }}
              >
                {auth.email}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{
            p: 2.5,
            borderRadius: 2,
            position: 'relative',
            bgcolor: 'grey.200',
          }}
        >
          {imgLogo}
        </Stack>
        <Box style={{ margin: '28px auto 12px', textAlign: 'center' }}>
          <FormLabel style={{ fontSize: 15 }}>by khanh.nguyen@boot.ai</FormLabel>
        </Box>
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
            },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
};

export default Sidebar;
