import React, { useEffect, useRef, useState } from 'react';
import { alpha } from '@material-ui/core/styles';
import { Box, MenuItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core';
import { MenuPopover } from 'components';
import i18next from 'i18next';

const langs = [
  {
    value: 'vi',
    label: 'Tiếng Việt',
    icon: '/static/icons/ic_flag_vi.svg',
  },
  {
    value: 'en',
    label: 'English',
    icon: '/static/icons/ic_flag_en.svg',
  },
];

const LanguagePopover: React.FC = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (language: number) => {
    i18next.changeLanguage(langs[language].value);
    setLanguage(language);
    handleClose();
  };

  useEffect(() => {
    const currentLanguage = i18next.language || langs[0].value;
    const index = langs.findIndex((item) => item.value === currentLanguage);
    setLanguage(index);
  }, []);

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
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
          }),
        }}
      >
        <img src={langs[language].icon} alt={langs[language].label} />
      </IconButton>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current}>
        <Box sx={{ py: 1 }}>
          {langs.map((option, index) => (
            <MenuItem
              key={option.value}
              selected={option.value === langs[language].value}
              onClick={() => handleClick(index)}
              sx={{ py: 1, px: 2.5 }}
            >
              <ListItemIcon>
                <Box component="img" alt={option.label} src={option.icon} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'body2' }}>{option.label}</ListItemText>
            </MenuItem>
          ))}
        </Box>
      </MenuPopover>
    </>
  );
};

export default LanguagePopover;
