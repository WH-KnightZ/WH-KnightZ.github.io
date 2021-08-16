import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store, history } from './store';
import { Router } from 'react-router-dom';
import { BackToTop, Loading, ScrollToTop } from 'components';
import { baseURL } from 'extensions/configs';
import ThemeConfig from 'theme';
import 'extensions/i18n';
import 'scss/style.scss';

axios.defaults.baseURL = baseURL;

ReactDOM.render(
  <ThemeConfig>
    <Router history={history}>
      <Provider store={store}>
        <App />
        <Loading />
      </Provider>
      <ScrollToTop />
      <BackToTop />
    </Router>
  </ThemeConfig>,
  document.getElementById('root'),
);
