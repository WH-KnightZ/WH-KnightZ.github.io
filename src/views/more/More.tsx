import { Box, Button, Container, Link, Typography } from '@material-ui/core';
import React from 'react';

const More: React.FC = () => {
  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      <Container>
        <Box sx={{ margin: 'auto', textAlign: 'center' }}>
          <Typography sx={{ color: 'text.secondary', fontSize: 17 }}>
            Hiện chưa biết cho gì vào đây! Nếu ai muốn thêm tool gì đó hay ho có thể ping
            <Link href="https://www.messenger.com/t/WH.KnightZ" underline="none" target="_blank">
              {' '}
              khanh.nguyen@boot.ai
            </Link>
            <br />
            Tool sẽ có sau vài phút.
          </Typography>

          <Box
            component="img"
            src="/static/illustrations/illustration_404.svg"
            sx={{ height: 160, mx: 'auto', my: { xs: 2, sm: 5 } }}
          />

          <Button
            size="large"
            variant="contained"
            onClick={() => window.open('https://www.messenger.com/t/WH.KnightZ')}
          >
            Ping Ngay
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default More;
