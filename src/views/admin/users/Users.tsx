import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Stack, Button, Container, Typography, Select, MenuItem, FormLabel, Box, FilledInput } from '@material-ui/core';
import { FocusInput, LoadingButton, MaterialIcon, Page, Table } from 'components';
import { RowType, TableFieldsType } from 'components/table/row/Row';
import { useApi, useAuth, useModalConfirm } from 'extensions/hooks';
import { adminAPIs } from 'extensions/configs';
import { DEFAULT_PAGE_SIZE } from 'extensions/constants';
import { addNo } from 'extensions/utilities';
import ModalUser from './ModalUser';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import './Users.scss';
import { useFormik, Form, FormikProvider } from 'formik';
import axios from 'axios';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('email_not_valid').required(),
  password: Yup.string().required(),
});

const Users: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation();
  const { showModalConfirm, hideModalConfirm } = useModalConfirm();
  const { callApi } = useApi();
  const { updateProfile } = useAuth();
  const email = 'lehuong.hp9794@gmail.com';
  const password = 'Admin@1234';
  const [status, setStatus] = useState(0);
  const [appointmentType, setAppointmentType] = useState(1);
  const [amount, setAmount] = useState(15);
  const [time, setTime] = useState(15);
  const [amountOK, setAmountOK] = useState(0);

  const [loading, setLoading] = useState(false);
  const interval = useRef<any>();

  const formik = useFormik({
    initialValues: {
      email,
      password,
    },
    validationSchema: LoginSchema,
    onSubmit: ({ email, password }) => {
      setLoading(true);
      callApi({ method: 'post', api: 'user/auth/signin', body: { email, password } }, ({ status, data }) => {
        setLoading(false);
        if (status) {
          axios.defaults.headers.common['Authorization'] = data.id_token;
          updateProfile({
            ...data,
            email,
            full_name: data.first_name + ' ' + data.last_name,
            avatar_url: data.avatar,
          });
          setStatus(1);
        }
      });
    },
  });

  const { errors, values, handleSubmit, getFieldProps, isValid } = formik;

  const stop = async () => {
    setLoading(false);
    clearInterval(interval.current);
    let amountOK1 = 0;
    await setAmountOK((i) => {
      amountOK1 = i;
      return i;
    });
    showModalConfirm({
      title: 'Thông Báo',
      content: `Đã book thành công ${amountOK1} trong tổng số ${amount} appointments!`,
      confirm: {
        text: 'OK',
        action: () => hideModalConfirm(),
      },
    });
  };

  const book = () => {
    setAmountOK(0);
    const newAmount = Number(amount);
    const newTime = Number(time) * 60;
    const newAppointmentType = Number(appointmentType);
    setLoading(true);
    let i = 0;
    interval.current = setInterval(() => {
      let begin = Math.ceil(new Date().getTime() / 1000 / newTime + i) * newTime;
      let end = begin + newTime;
      const a = {
        appointment_type: Number(appointmentType),
        result_survey: newAppointmentType === 1 ? {} : undefined,
        relatives:
          newAppointmentType === 1
            ? [
                {
                  email: 'nguyenkhanhsl1997@gmail.com',
                  first_name: 'Khanh',
                  last_name: 'Nguyen',
                },
              ]
            : undefined,
        appointment_time_begin: begin,
        appointment_time_end: end,
        cost: 54.0,
        selected_treatments_id: newAppointmentType === 1 ? 2 : undefined,
        customer_gender: 0,
        phone_number: '+843456789',
        street: 'Ha Noi',
        postcode: '0809',
        no: '0809',
        place: '0809',
      };
      callApi({ method: 'post', api: 'consulting/appointments', body: a }, () => {
        setAmountOK((x) => {
          const newX = x + 1;
          if (newX >= newAmount) stop();
          return newX;
        });
      });
      i += 1;
      if (i >= newAmount) clearInterval(interval.current);
    }, 500);
  };

  return (
    <Page title="User Management" className="Users-page">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="center" mb={5}>
          <Typography variant="h4" gutterBottom>
            Tự động book lịch by khanh.nguyen@boot.ai
          </Typography>
        </Stack>

        <div style={{ maxWidth: 500, margin: '0 auto' }}>
          {status === 0 ? (
            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3} my={3}>
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
                    autoComplete="new-password"
                    label={t('password')}
                    {...getFieldProps('password')}
                    invalid={!!values.password && !!errors.password}
                    error={t(errors.password?.toString() || '')}
                    disabled={loading}
                  />
                </Stack>

                <LoadingButton
                  loading={loading}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  disabled={!isValid}
                >
                  {t('login')}
                </LoadingButton>
              </Form>
            </FormikProvider>
          ) : (
            <div>
              <Stack my={3} display="flex" flexDirection="row" alignItems="center">
                <Box style={{ minWidth: 100 }} mr={3}>
                  <FormLabel>Book cho:</FormLabel>
                </Box>
                <Select
                  style={{ width: '100%' }}
                  value={appointmentType}
                  onChange={(e: any) => setAppointmentType(e.target.value)}
                >
                  <MenuItem value={1}>Nurse</MenuItem>
                  <MenuItem value={2}>Assistant</MenuItem>
                </Select>
              </Stack>
              <Stack my={3} display="flex" flexDirection="row" alignItems="center">
                <Box style={{ minWidth: 100 }} mr={3}>
                  <FormLabel>Thời gian:</FormLabel>
                </Box>
                <Select style={{ width: '100%' }} value={time} onChange={(e: any) => setTime(e.target.value)}>
                  <MenuItem value={15}>15 phút</MenuItem>
                  <MenuItem value={30}>30 phút</MenuItem>
                  <MenuItem value={45}>45 phút</MenuItem>
                  <MenuItem value={60}>1 tiếng</MenuItem>
                </Select>
              </Stack>
              <Stack my={3} display="flex" flexDirection="row" alignItems="center">
                <Box style={{ minWidth: 100 }} mr={3}>
                  <FormLabel style={{ width: 100 }}>Số lượng:</FormLabel>
                </Box>
                <FocusInput
                  type="number"
                  label="Số lượng"
                  value={amount.toString()}
                  onChange={(e: any) => setAmount(e.target.value)}
                  name="amount"
                  disabled={loading}
                />
              </Stack>
              <Stack display="flex" flexDirection="row" my={3}>
                <LoadingButton
                  loading={loading}
                  fullWidth
                  size="large"
                  variant="contained"
                  style={{ marginRight: 20 }}
                  onClick={book}
                >
                  Book
                </LoadingButton>
                <LoadingButton
                  loading={false}
                  fullWidth
                  size="large"
                  variant="contained"
                  color="error"
                  disabled={!loading}
                  onClick={stop}
                >
                  Dừng
                </LoadingButton>
              </Stack>
              {loading && (
                <Stack display="flex" flexDirection="row">
                  <Box style={{ minWidth: 100 }} mr={3}>
                    <FormLabel style={{ width: 100 }}>
                      Đã book được {amountOK}/{amount} appointments
                    </FormLabel>
                  </Box>
                </Stack>
              )}
            </div>
          )}
        </div>
      </Container>
    </Page>
  );
};

export default Users;
