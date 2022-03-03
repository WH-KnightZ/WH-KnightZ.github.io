import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Layout.scss';
import DashboardBar from './DashboardBar';
import { Page } from 'components';
import { Container, Stack, Typography } from '@material-ui/core';
import { SCREENS_TITLE, SCREENS } from 'extensions/constants';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import AutoApi from 'views/autoApi/AutoApi';
import Login from 'views/login/Login';
import AutoBook from 'views/autoBook/AutoBook';
import FakeTime from 'views/fakeTime/FakeTime';
import More from 'views/more/More';

const { AUTO_API, AUTO_BOOK, FAKE_TIME, MORE } = SCREENS;

const Layout: React.FC<RouteComponentProps> = () => {
  const screen = useSelector((state: RootState) => state.screen);

  let Render;

  switch (screen) {
    case AUTO_API:
      Render = AutoApi;
      break;
    case AUTO_BOOK:
      Render = AutoBook;
      break;
    case MORE:
      Render = More;
      break;
    case FAKE_TIME:
      Render = FakeTime;
      break;

    default:
      Render = Login;
      break;
  }

  return (
    <div className="LayoutAdmin">
      <DashboardBar />

      <div className="LayoutAdmin-main">
        <Page title="Vài Công Cụ Hỗ Trợ Tester" className="LayoutAdmin-main__page">
          <Container>
            <Stack direction="row" alignItems="center" justifyContent="center" mb={1} pb={2}>
              <Typography variant="h4" gutterBottom style={{ marginBottom: 0 }}>
                {SCREENS_TITLE[screen]}
              </Typography>
            </Stack>

            <Render />
          </Container>
        </Page>
      </div>
    </div>
  );
};

export default Layout;
