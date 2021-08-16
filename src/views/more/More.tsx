import { Box, Button, Container, Typography } from '@material-ui/core';
import React from 'react';

const More: React.FC = () => {
  return (
    <Container>
      <Box sx={{ margin: 'auto', textAlign: 'center' }}>
        <Typography sx={{ color: 'text.secondary', fontSize: 17 }}>
          Hiện chưa biết cho gì vào đây! Nếu ai muốn thêm tool gì đó hay ho có thể ping{' '}
          <span style={{ color: '#00AB55' }}>khanh.nguyen@boot.ai</span> Tool sẽ có sau vài phút.
        </Typography>

        <Box
          component="img"
          src="/static/illustrations/illustration_404.svg"
          sx={{ height: 160, mx: 'auto', my: { xs: 2, sm: 5 } }}
        />

        <Button size="large" variant="contained" onClick={() => window.open('https://www.messenger.com/t/WH.KnightZ')}>
          Ping Ngay
        </Button>
      </Box>
    </Container>
  );
};

export default More;
