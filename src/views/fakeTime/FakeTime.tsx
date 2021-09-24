import React, { useState } from 'react';
import { Stack, FormLabel, Box, Checkbox, InputAdornment, Grid } from '@material-ui/core';
import { FocusInput, LoadingButton } from 'components';
import { useApi } from 'extensions/hooks';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import './FakeTime.scss';
import { ls } from 'extensions/extensions';
import moment from 'moment';

const FakeTime: React.FC = () => {
  const appointmentId = ls.get('appointment_id') || '';
  const { callApi } = useApi();
  const [id, setId] = useState(appointmentId);
  const [beginTime, setBeginTime] = useState('30');
  const [endTime, setEndTime] = useState('30');
  const [reloadStart, setReloadStart] = useState(false);
  const [envPrd, setEnvPrd] = useState(false);

  const loading = useSelector((state: RootState) => state.loading);

  const fake = () => {
    const currentTime = moment().unix();
    const time_begin = currentTime - Number(beginTime || 0) * 60;
    const time_end = currentTime + Number(endTime || 0) * 60;
    callApi({
      method: 'put',
      api: `https://ktg3nkjw3g.execute-api.eu-central-1.amazonaws.com/HBTestConsulting/api/v1/appointments${
        envPrd ? '-prd' : ''
      }`,
      body: { id: id, time_begin, time_end, reload_start: reloadStart },
      loading: true,
    });
  };

  return (
    <div className="FakeTime">
      <Stack my={2} display="flex" flexDirection="row" alignItems="center">
        <Box style={{ minWidth: 150 }} mr={3}>
          <FormLabel style={{ width: '100%' }}>Appointment Id:</FormLabel>
        </Box>
        <FocusInput
          value={id}
          placeholder="Appointment hoặc Meeting Id"
          onChange={(e: any) => {
            const value = e.target.value;
            setId(value);
            ls.set('appointment_id', value);
          }}
          name="id"
          disabled={loading}
        />
      </Stack>
      <Stack my={2} display="flex" flexDirection="row" alignItems="center">
        <Box style={{ minWidth: 150 }} mr={3}>
          <FormLabel style={{ width: '100%' }}>Thời gian bắt đầu:</FormLabel>
        </Box>
        <FocusInput
          type="number"
          placeholder="Trước thời điểm hiện tại bao nhiêu phút"
          value={beginTime}
          onChange={(e: any) => setBeginTime(e.target.value)}
          name="begin_time"
          disabled={loading}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <div className="adornment">phút trước</div>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack my={2} display="flex" flexDirection="row" alignItems="center">
        <Box style={{ minWidth: 150 }} mr={3}>
          <FormLabel style={{ width: '100%' }}>Thời gian kết thúc:</FormLabel>
        </Box>
        <FocusInput
          type="number"
          placeholder="Sau thời điểm hiện tại bao nhiêu phút"
          value={endTime}
          onChange={(e: any) => setEndTime(e.target.value)}
          name="end_time"
          disabled={loading}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <div className="adornment">phút sau</div>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack my={2} display="flex" flexDirection="row" alignItems="center">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center">
              <Box style={{ minWidth: 150 }} mr={3}>
                <FormLabel style={{ width: '100%' }}>Xoá trạng thái start:</FormLabel>
              </Box>
              <Checkbox
                checked={reloadStart}
                onChange={() => setReloadStart(!reloadStart)}
                style={{ marginLeft: 10 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center">
              <Box style={{ minWidth: 150 }} mr={3}>
                <FormLabel style={{ width: '100%' }}>Môi trường PRD:</FormLabel>
              </Box>
              <Checkbox checked={envPrd} onChange={() => setEnvPrd(!envPrd)} style={{ marginLeft: 10 }} />
            </Box>
          </Grid>
        </Grid>
      </Stack>
      <i style={{ fontSize: 13 }}>
        - Nếu appointment đã bị cancel hoặc finish sẽ tự động chuyển sang accept, vậy nên đôi khi có thể dùng lại các
        meeting đã finish, đỡ mất công book lần nữa.
        <br />- Nếu muốn test case popup 10s có thể đặt time finish là khoảng 32p trước (nhập -32 tại ô time end) sau đó
        vào call đợi 2p
      </i>
      <Stack display="flex" flexDirection="row" my={3}>
        <LoadingButton loading={loading} fullWidth size="large" variant="contained" onClick={fake} disabled={!id}>
          Fake
        </LoadingButton>
      </Stack>
    </div>
  );
};

export default FakeTime;
