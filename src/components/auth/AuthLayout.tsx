import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, Stack, Link, Container, Typography, Box } from '@material-ui/core';
import { MHidden, Logo } from 'components';
import AuthSocial from './AuthSocial';
import AuthForm from './AuthForm';
import { useTranslation } from 'react-i18next';
import './AuthLayout.scss';

interface Props {
  isRegister?: boolean;
}

const AuthLayout: React.FC<Props> = ({ isRegister }) => {
  const { t } = useTranslation();

  const redirectLink = (isDown: boolean) => (
    <MHidden width={isDown ? 'smDown' : 'smUp'}>
      <Typography
        variant="body2"
        sx={
          isDown
            ? {
                mt: { md: -2 },
              }
            : {
                mt: 3,
                textAlign: 'center',
              }
        }
      >
        {t(isRegister ? 'already_have_an_account' : 'dont_have_an_account')}&nbsp;
        <Link variant="subtitle2" component={RouterLink} to={isRegister ? '/login' : '/register'}>
          {t(isRegister ? 'login' : 'get_started')}
        </Link>
      </Typography>
    </MHidden>
  );

  return (
    <div className="AuthLayout">
      <header className="AuthLayout-header">
        <RouterLink to="/">
          <Logo />
        </RouterLink>

        {redirectLink(true)}
      </header>

      <Box display="flex">
        <MHidden width="mdDown">
          <Card className="AuthLayout-section">
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              {t(isRegister ? 'hi_join_with_us' : 'hi_welcome_back')}
            </Typography>
            <img src="/static/illustrations/illustration_login.png" alt="login" />
          </Card>
        </MHidden>

        <Container maxWidth="sm">
          <div className="AuthLayout-content">
            <Stack sx={{ mb: 3, mt: 5 }}>
              <Typography variant="h4" gutterBottom>
                {t(isRegister ? 'register_to_vinh_quang' : 'login_to_vinh_quang')}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                {t(isRegister ? 'free_forever_no_credit_card' : 'enter_your_details_below')}
              </Typography>
            </Stack>
            <AuthSocial />

            <AuthForm isRegister={isRegister} />

            {isRegister && (
              <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
                {t('by_registering_i_agree_to_vq')}&nbsp;
                <Link underline="always" sx={{ color: 'text.primary' }}>
                  {t('terms_of_service')}
                </Link>
                &nbsp;{t('and')}&nbsp;
                <Link underline="always" sx={{ color: 'text.primary' }}>
                  {t('privacy_policy')}
                </Link>
                .
              </Typography>
            )}

            {redirectLink(false)}
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default AuthLayout;
