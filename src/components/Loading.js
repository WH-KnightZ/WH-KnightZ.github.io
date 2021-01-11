import { useSelector } from 'react-redux';
import { CSpinner } from '@coreui/react';

const Loading = () => {
  const isLoading = useSelector((state) => state.loading);

  return (
    <div hidden={!isLoading} className="modal--loading">
      <CSpinner color="info" style={{ width: '6rem', height: '6rem', margin: 'auto' }} />
    </div>
  );
};

export default Loading;
