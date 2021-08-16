import React from 'react';
import { Stack, Button, Divider, Typography } from '@material-ui/core';
import google from 'assets/icons/google.svg';
import facebook from 'assets/icons/facebook.svg';
import twitter from 'assets/icons/twitter.svg';
import { useTranslation } from 'react-i18next';

const AuthSocial: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button fullWidth size="large" color="inherit" variant="outlined">
          <img className="img-social" src={google} alt="google" />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <img className="img-social" src={facebook} alt="facebook" />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <img className="img-social" src={twitter} alt="twitter" />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary', textTransform: 'uppercase' }}>
          {t('or')}
        </Typography>
      </Divider>
    </>
  );
};

export default AuthSocial;
