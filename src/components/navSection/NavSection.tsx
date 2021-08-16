import React from 'react';
import { matchPath } from 'react-router-dom';
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, List, ListItemText, ListItemIcon, ListItemButton } from '@material-ui/core';
import { MaterialIcon } from 'components';
import { useTranslation } from 'react-i18next';
import { useScreen } from 'extensions/hooks';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const ListItemStyle = styled((props: any) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 56,
  position: 'relative',
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  '&:before': {
    top: 0,
    right: 0,
    width: 3,
    bottom: 0,
    content: "''",
    display: 'none',
    position: 'absolute',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const NavItem = ({ item, active }: any) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { changeScreen } = useScreen();

  let { title, path, icon, info } = item;
  title = t(title);

  const isActiveRoot = active(path);

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:before': { display: 'block' },
  };

  return (
    <ListItemStyle
      onClick={() => changeScreen(path)}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIconStyle>
        <MaterialIcon icon={icon} />
      </ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  );
};

interface Props {
  navConfig: any[];
  [key: string]: any;
}

const NavSection: React.FC<Props> = ({ navConfig, ...other }) => {
  const screen = useSelector((state: RootState) => state.screen);

  const match = (path: any) => path === screen;

  return (
    <Box {...other}>
      <List disablePadding>
        {navConfig.map((item: any) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  );
};

export default NavSection;
