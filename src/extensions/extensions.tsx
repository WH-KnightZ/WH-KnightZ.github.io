import CircularProgress from '@material-ui/core/CircularProgress';

export const ls = require('local-storage');

export const loading = (
  <div className="modal-loading">
    <CircularProgress size={60} color="secondary" />
  </div>
);

export const logo = '/static/logo.svg';

export const imgLogo = <img src={logo} alt="logo" style={{ width: 120, height: 64 }} />;
