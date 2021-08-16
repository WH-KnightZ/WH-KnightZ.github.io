import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store, history } from './store';
import { Router } from 'react-router-dom';
import { ScrollToTop } from 'components';
import { baseURLs } from 'extensions/configs';
import ThemeConfig from 'theme';
import 'extensions/i18n';
import 'scss/style.scss';

axios.defaults.baseURL = baseURLs['STG'];

ReactDOM.render(
  <ThemeConfig>
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
      <ScrollToTop />
    </Router>
  </ThemeConfig>,
  document.getElementById('root'),
);
