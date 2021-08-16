import React, { useRef, useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { alpha } from '@material-ui/core/styles';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@material-ui/core';
import { MaterialIcon, MenuPopover } from 'components';
import { useAuth } from 'extensions/hooks';
import { actionSignOut } from 'extensions/utilities';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const menuOptions = [
  {
    label: 'home',
    icon: 'home',
    linkTo: '/',
  },
  {
    label: 'profile',
    icon: 'person',
    linkTo: '#',
  },
  {
    label: 'settings',
    icon: 'settings',
    linkTo: '#',
  },
];

const AccountPopover: React.FC = () => {
  const { t } = useTranslation();

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const auth = useAuth();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.15),
            },
          }),
        }}
      >
        <Avatar src={auth.avatar_url} alt="avatar" />
      </IconButton>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 220 }}>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {auth.full_name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {auth.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {menuOptions.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box mr={2} display="flex" alignItems="center">
              <MaterialIcon icon={option.icon} />
            </Box>

            {t(option.label)}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined" onClick={() => actionSignOut({ history, dispatch })}>
            {t('logout')}
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
};

export default AccountPopover;
