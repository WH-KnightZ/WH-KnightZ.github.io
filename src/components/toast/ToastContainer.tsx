import { useToasts } from 'extensions/hooks';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import Toast from './Toast';

const ToastContainter: React.FC = () => {
  const toasts = useSelector((state: RootState) => state.toasts);
  const { removeToast } = useToasts();

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast key={toast.key} onClose={() => removeToast(toast.key)} {...toast} />
      ))}
    </div>
  );
};

export default ToastContainter;
