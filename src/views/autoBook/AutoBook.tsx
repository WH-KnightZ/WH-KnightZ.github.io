import React, { useEffect, useRef, useState } from 'react';
import { Stack, Select, MenuItem, FormLabel, Box, Grid, Button, Checkbox } from '@material-ui/core';
import { FocusInput, LoadingButton, MaterialIcon } from 'components';
import { useApi, useAuth, useLoading, useModalConfirm, useScreen, useToasts } from 'extensions/hooks';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { SCREENS } from 'extensions/constants';
import ModalRelative from './ModalRelative';
import { pay, PaymentType } from './payment';
import './AutoBook.scss';

const initialValues = {
  email: '',
  first_name: '',
  last_name: '',
};

type RelativeType = {
  email: string;
  first_name: string;
  last_name: string;
};

const Users: React.FC = () => {
  const { showModalConfirm, hideModalConfirm } = useModalConfirm();
  const { startLoading, stopLoading } = useLoading();
  const { callApi } = useApi();
  const { changeScreen } = useScreen();
  const { createToast } = useToasts();
  const auth = useAuth();

  const [appointmentType, setAppointmentType] = useState(1);
  const [amount, setAmount] = useState(15);
  const [time, setTime] = useState(15);
  const [amountOK, setAmountOK] = useState(0);
  const [modalRelative, setModalRelative] = useState<{ type: 'create' | 'update'; show: boolean; initialValues: any }>({
    show: false,
    type: 'create',
    initialValues,
  });
  const [autoPay, setAutoPay] = useState(true);
  const [relatives, setRelatives] = useState<RelativeType[]>([
    {
      email: 'hang.bui@boot.ai',
      first_name: 'Hang',
      last_name: 'Bui',
    },
    {
      email: 'lethihuong_t61@hus.edu.vn',
      first_name: 'Huong',
      last_name: 'Le',
    },
  ]);

  const interval = useRef<any>();

  const loading = useSelector((state: RootState) => state.loading);

  const stop = async () => {
    stopLoading();
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
    startLoading();
    let i = 0;
    interval.current = setInterval(() => {
      let begin = Math.ceil(new Date().getTime() / 1000 / 900) * 900 + newTime * i;
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
                ...relatives,
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
      callApi({ method: 'post', api: 'consulting/appointments', body: a }, ({ status, data }) => {
        const done = () =>
          setAmountOK((x) => {
            const newX = x + 1;
            if (newX >= newAmount) stop();
            return newX;
          });
        if (autoPay && status === 'success') {
          const { treatments } = data;
          const payment: PaymentType = {
            appointmentName: treatments?.diseases_title,
            appointmentId: data.id,
            price: treatments?.price,
            email: auth.email,
            name: auth.first_name + ' ' + auth.last_name,
            createToast,
            done,
          };
          pay(payment);
        } else done();
      });
      i += 1;
      if (i >= newAmount) clearInterval(interval.current);
    }, 500);
  };

  const renderRelative = (relative: RelativeType) => {
    return (
      <Stack key={relative.email} direction="row" spacing={2} mb={3}>
        <FocusInput size="small" type="email" label="Email" value={relative.email} name="email" readOnly />
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            size="small"
            style={{ minWidth: 40, width: 40 }}
            onClick={() => setModalRelative({ show: true, type: 'update', initialValues: relative })}
          >
            <MaterialIcon icon="edit" />
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{ minWidth: 40, width: 40 }}
            color="error"
            onClick={() => setRelatives(relatives.filter((_relative) => _relative.email !== relative.email))}
          >
            <MaterialIcon icon="delete" />
          </Button>
        </Stack>
      </Stack>
    );
  };

  useEffect(() => {
    if (!auth.id_token)
      showModalConfirm({
        title: 'Thông Báo',
        content: 'Đăng nhập đi đã bạn ê!',
        confirm: {
          text: 'Okii',
          action: () => {
            changeScreen(SCREENS.LOGIN);
            hideModalConfirm();
          },
        },
      });
  }, []);

  return (
    <div className="AutoBook">
      <ModalRelative
        {...modalRelative}
        setRelatives={setRelatives}
        onClose={() => setModalRelative({ ...modalRelative, show: false })}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} className="AutoBook-form">
          <Stack mb={3} display="flex" flexDirection="row" alignItems="center">
            <Box style={{ minWidth: 130 }} mr={3}>
              <FormLabel style={{ width: 130 }}>Book cho:</FormLabel>
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
            <Box style={{ minWidth: 130 }} mr={3}>
              <FormLabel style={{ width: 130 }}>Thời gian:</FormLabel>
            </Box>
            <Select style={{ width: '100%' }} value={time} onChange={(e: any) => setTime(e.target.value)}>
              <MenuItem value={15}>15 phút</MenuItem>
              <MenuItem value={30}>30 phút</MenuItem>
              <MenuItem value={45}>45 phút</MenuItem>
              <MenuItem value={60}>1 tiếng</MenuItem>
              <MenuItem value={120}>2 tiếng</MenuItem>
            </Select>
          </Stack>
          <Stack my={3} display="flex" flexDirection="row" alignItems="center">
            <Box style={{ minWidth: 130 }} mr={3}>
              <FormLabel style={{ width: 130 }}>Số lượng:</FormLabel>
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
          <Stack my={3} display="flex" flexDirection="row" alignItems="center">
            <Box style={{ minWidth: 130 }} mr={3}>
              <FormLabel style={{ width: 130 }}>Thanh toán luôn:</FormLabel>
            </Box>
            <Checkbox checked={autoPay} onChange={() => setAutoPay(!autoPay)} style={{ marginLeft: 10 }} />
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
        </Grid>
        <Grid item xs={12} md={6} className="AutoBook-relatives">
          <Box display="flex" style={{ justifyContent: 'space-between' }}>
            <div />
            <Button
              size="small"
              variant="contained"
              style={{ marginBottom: 18, height: 40, fontSize: 15 }}
              startIcon={<MaterialIcon icon="add" />}
              onClick={() => setModalRelative({ show: true, type: 'create', initialValues })}
            >
              Người Thân
            </Button>
          </Box>
          {relatives.map(renderRelative)}
        </Grid>
      </Grid>
    </div>
  );
};

export default Users;
