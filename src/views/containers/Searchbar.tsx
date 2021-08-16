import React, { useState } from 'react';
import { Input, Slide, Button, InputAdornment, ClickAwayListener, IconButton } from '@material-ui/core';
import { MaterialIcon } from 'components';
import './Searchbar.scss';
import { useTranslation } from 'react-i18next';

const Searchbar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!isOpen && (
          <IconButton onClick={handleOpen}>
            <MaterialIcon icon="search" />
          </IconButton>
        )}

        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <div className="Searchbar">
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder={t('search') + ' …'}
              startAdornment={
                <InputAdornment position="start">
                  <MaterialIcon icon="search" />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
            />
            <Button variant="contained" onClick={handleClose}>
              {t('search')}
            </Button>
          </div>
        </Slide>
      </div>
    </ClickAwayListener>
  );
};

export default Searchbar;
