import React, { useEffect, useRef, useState } from 'react';
import { Alert } from '@material-ui/core';
import './Toast.scss';

interface Props {
  type?: 'success' | 'error' | 'warning' | 'info';
  message?: string;
  duration?: number;
  onClick?: Function;
  onClose?: any;
}

const Toast: React.FC<Props> = (props) => {
  const { type = 'success' as any, message = 'This is a Toast!', duration = 3000, onClick, onClose } = props;
  const [state, setState] = useState<'' | 'slide-in' | 'fade-out'>('');
  const timeout = useRef<any>();
  const ref = useRef<any>();

  /**
   * Close the toast
   * @param {*} e click event
   */
  const close = (e?: any) => {
    // Prevent click parent when click close
    e?.stopPropagation();

    setState('');
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setState('fade-out');

      timeout.current = setTimeout(() => {
        onClose?.();
      }, 400);
    }, 400);
  };

  useEffect(() => {
    setTimeout(() => setState('slide-in'), 10);
    if (duration) {
      timeout.current = setTimeout(() => {
        close();
      }, duration);
    }
    return () => clearTimeout(timeout.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isFadeOut = state === 'fade-out';

  if (onClick) {
  }

  return (
    <div
      className={`toast ${state}`}
      ref={ref}
      style={{ maxHeight: isFadeOut ? 0 : ref.current?.scrollHeight, marginBottom: isFadeOut ? 0 : 8 }}
    >
      <Alert onClose={close} severity={type === true ? 'success' : type || 'error'} variant="filled">
        {message}
      </Alert>
    </div>
  );
};

export default Toast;
