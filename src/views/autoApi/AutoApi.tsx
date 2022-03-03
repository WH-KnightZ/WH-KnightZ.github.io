import React, { useEffect, useRef, useState } from 'react';
import { Stack, Select, MenuItem, FormLabel, Box, Grid, Button, Checkbox } from '@material-ui/core';
import { FocusInput, LoadingButton, MaterialIcon } from 'components';
import { useApi, useAuth, useLoading, useModalConfirm, useScreen, useToasts } from 'extensions/hooks';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { SCREENS } from 'extensions/constants';
import './AutoApi.scss';
import { ls } from 'extensions/extensions';
import axios from 'axios';

const AutoApi: React.FC = () => {
  const { showModalConfirm, hideModalConfirm } = useModalConfirm();
  const { startLoading, stopLoading } = useLoading();
  const { callApi } = useApi();
  const { changeScreen } = useScreen();
  const { createToast } = useToasts();
  const auth = useAuth();
  const { updateProfile } = auth;
  const relativesLS = ls.get('relatives') || [];

  const [url, setUrl] = useState('/api/v1/manage/products');
  const [appointmentType, setAppointmentType] = useState(1);
  const [amount, setAmount] = useState(10);
  const [time, setTime] = useState(15);
  const [after, setAfter] = useState(0);
  const [amountOK, setAmountOK] = useState(0);
  const [autoPay, setAutoPay] = useState(true);

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
    const newAfter = Number(after);
    const newAppointmentType = Number(appointmentType);
    const isNurse = newAppointmentType === 1;
    startLoading();
    let i = 0;
    interval.current = setInterval(() => {
      let begin = Math.ceil(new Date().getTime() / 1000 / 900) * 900 + newTime * i + newAfter * 900;
      let end = begin + newTime;
      const body = {
        appointment_type: newAppointmentType,
        result_survey: isNurse ? {} : undefined,
        appointment_time_begin: begin,
        appointment_time_end: isNurse ? end : undefined,
        selected_treatments_id: isNurse ? 2 : undefined,
        recurring_calendar_id: isNurse ? undefined : '',
        customer_gender: 0,
        phone_number: '+84366918587',
        street: 'Ha Noi',
        postcode: '2408',
        no: '2408',
        place: '2408',
      };
      callApi({ method: 'post', api: 'consulting/appointments', body }, ({ status, data }) => {
        const done = () =>
          setAmountOK((x) => {
            const newX = x + 1;
            if (newX >= newAmount) stop();
            return newX;
          });
        if (autoPay && status === 'success') {
        } else done();
      });
      i += 1;
      if (i >= newAmount) clearInterval(interval.current);
    }, 500);
  };

  // useEffect(() => {
  //   ls.set('relatives', relatives);
  // }, [relatives]);

  const renderRelative = (relative: any) => {
    return (
      <Stack key={relative.email} direction="row" spacing={2} mb={3}>
        <FocusInput size="small" type="email" label="Email" value={relative.email} name="email" readOnly />
        <Stack direction="row" spacing={1}>
          <Button variant="contained" size="small" style={{ minWidth: 40, width: 40 }} color="error">
            <MaterialIcon icon="delete" />
          </Button>
        </Stack>
      </Stack>
    );
  };

  useEffect(() => {
    callApi(
      {
        method: 'post',
        api: '/api/v1/auth/login',
        body: { email: 'admin.fit.mta@gmail.com', password: 'admin@1234' },
        loading: true,
        hideToast: true,
      },
      ({ status, data }) => {
        if (status === 'success') {
          axios.defaults.headers.common['Authorization'] = data.access_token;
          updateProfile(data);
        }
      },
    );
  }, []);

  return (
    <div className="AutoApi">
      <Stack mb={3} display="flex" flexDirection="row" alignItems="center">
        <Box style={{ minWidth: 130 }} mr={3}>
          <FormLabel style={{ width: 130 }}>Book cho:</FormLabel>
        </Box>
        <FocusInput
          type="number"
          value={amount.toString()}
          onChange={(e: any) => setAmount(e.target.value)}
          name="amount"
          size="small"
          disabled={loading}
        />
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
        </Select>
      </Stack>
      <Stack my={3} display="flex" flexDirection="row" alignItems="center">
        <Box style={{ minWidth: 130 }} mr={3}>
          <FormLabel style={{ width: 130 }}>Số lượng:</FormLabel>
        </Box>
        <FocusInput
          type="number"
          value={amount.toString()}
          onChange={(e: any) => setAmount(e.target.value)}
          name="amount"
          disabled={loading}
        />
      </Stack>
      <Stack my={3} display="flex" flexDirection="row" alignItems="center">
        <Box style={{ minWidth: 130 }} mr={3}>
          <FormLabel style={{ width: 130 }}>Sau 15 phút:</FormLabel>
        </Box>
        <FocusInput
          type="number"
          value={after.toString()}
          onChange={(e: any) => setAfter(e.target.value)}
          name="after"
          disabled={loading}
        />
      </Stack>
      <Stack my={3} display="flex" flexDirection="row" alignItems="center">
        <Box style={{ minWidth: 130 }} mr={3}>
          <FormLabel style={{ width: 130 }}>Thanh toán luôn:</FormLabel>
        </Box>
        <Checkbox checked={autoPay} onChange={() => setAutoPay(!autoPay)} style={{ marginLeft: 10 }} />
      </Stack>
      <i style={{ fontSize: 13 }}>
        Lưu ý: Ở trường Sau 15p, khi nhập số lượng, thời gian book sẽ sau hiện tại 15 * số lượng (phút), nếu muốn book
        sau 1 tiếng có thể nhập 4.
      </i>
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
  );
};

export default AutoApi;
