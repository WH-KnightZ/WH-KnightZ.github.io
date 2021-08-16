import * as Yup from 'yup';
import React, { useState } from 'react';
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Link, Stack, Checkbox, FormControlLabel } from '@material-ui/core';
import { FocusInput, LoadingButton } from 'components';
import { useApi } from 'extensions/hooks';
import { actionSignIn } from 'extensions/utilities';
import { useDispatch } from 'react-redux';
import { userAPIs } from 'extensions/configs';
import { useTranslation } from 'react-i18next';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('email_not_valid').required(),
  password: Yup.string().required(),
});

interface Props {
  isRegister?: boolean;
}

const AuthForm: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const { isRegister } = props;
  const history = useHistory();
  const { callApi } = useApi();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const { state = {} }: any = location;
  const { email = '', password = '' } = state;

  const formik = useFormik({
    initialValues: {
      email,
      password,
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: ({ email, password }) => {
      setLoading(true);
      if (isRegister) {
        callApi({ method: 'post', api: userAPIs.register(), body: { email, password } }, ({ status }) => {
          setLoading(false);
          if (status) {
            history.push({ pathname: '/login', state: { email, password } });
          }
        });
      } else actionSignIn({ callApi, history, dispatch, email, password, callback: () => setLoading(false) });
    },
  });

  const { errors, values, handleSubmit, getFieldProps, isValid } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3} mb={isRegister ? 3 : 0}>
          <FocusInput
            autoComplete="email"
            type="email"
            label={t('email')}
            {...getFieldProps('email')}
            invalid={!!values.email && !!errors.email}
            error={t(errors.email?.toString() || '')}
            disabled={loading}
          />

          <FocusInput
            autoComplete={isRegister ? 'new-password' : 'password'}
            type="password"
            label={t('password')}
            {...getFieldProps('password')}
            invalid={!!values.password && !!errors.password}
            error={t(errors.password?.toString() || '')}
            disabled={loading}
          />
        </Stack>

        {!isRegister && (
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            <FormControlLabel
              control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
              label={t('remember_me')}
              disabled={loading}
            />

            <Link component={RouterLink} variant="subtitle2" to="#">
              {t('forgot_password')}
            </Link>
          </Stack>
        )}

        <LoadingButton loading={loading} fullWidth size="large" type="submit" variant="contained" disabled={!isValid}>
          {t(isRegister ? 'register' : 'login')}
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
};

export default AuthForm;
