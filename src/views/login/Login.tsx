import React, { useState } from 'react';
import { MenuItem, Select, Stack } from '@material-ui/core';
import { FocusInput, LoadingButton } from 'components';
import { useApi, useAuth, useScreen } from 'extensions/hooks';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import axios from 'axios';
import { ls } from 'extensions/extensions';
import { SCREENS } from 'extensions/constants';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { baseURLs } from 'extensions/configs';

const LoginSchema = Yup.object().shape({
  phone: Yup.string().required(),
  // email: Yup.string().email('email_not_valid').required(),
  password: Yup.string().required(),
});

const Login: React.FC = () => {
  const { callApi } = useApi();
  const loading = useSelector((state: RootState) => state.loading);
  const { changeScreen } = useScreen();
  const { updateProfile } = useAuth();
  const user = ls.get('user');
  const phone = user?.phone || '010203';
  // const email = user?.email || 'lehuong.hp9794@gmail.com';
  const password = user?.password || 'admin@1234';
  const [env, setEnv] = useState('STG');

  const formik = useFormik({
    initialValues: {
      phone,
      password,
    },
    validationSchema: LoginSchema,
    onSubmit: ({ phone, password }) => {
      callApi(
        {
          method: 'post',
          api: 'https://api.shop.stg.inreal.boot.ai/api/v1/auth/login',
          body: { phone, password },
          loading: true,
        },
        ({ status, data }) => {
          if (status === 'success') {
            axios.defaults.headers.common['Authorization'] = data.access_token;
            ls.set('user', { phone, password });
            updateProfile({
              ...data,
              phone,
              env,
            });
            changeScreen(SCREENS.AUTO_BOOK);
          }
        },
      );
    },
  });

  const { errors, values, handleSubmit, getFieldProps, isValid } = formik;

  const changeEnv = (e: any) => {
    const newEnv = e.target.value;
    axios.defaults.baseURL = baseURLs[newEnv];
    setEnv(newEnv);
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3} my={3}>
            <FocusInput
              autoComplete="phone"
              type="phone"
              label="Điện thoại"
              {...getFieldProps('phone')}
              invalid={!!values.phone && !!errors.phone}
              // error="Email không hợp lệ!"
              disabled={loading}
            />

            <FocusInput
              autoComplete="new-password"
              label="Mật Khẩu"
              {...getFieldProps('password')}
              invalid={!!values.password && !!errors.password}
              error=""
              disabled={loading}
            />

            <Select style={{ width: '100%' }} value={env} onChange={changeEnv} disabled={loading}>
              <MenuItem value="STG">Môi trường STG</MenuItem>
              <MenuItem value="UAT">Môi trường UAT</MenuItem>
              <MenuItem value="PRD">Môi trường PRD</MenuItem>
            </Select>
          </Stack>

          <LoadingButton loading={loading} fullWidth size="large" type="submit" variant="contained" disabled={!isValid}>
            Đăng Nhập
          </LoadingButton>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default Login;
