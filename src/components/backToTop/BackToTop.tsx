import React, { useEffect, useState } from 'react';
import backToTop from './back-to-top.png';
import './BackToTop.scss';

const BackTopTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 500) {
        if (!show) setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [show]);

  return (
    <div className={`hb-back-to-top${show ? ' active' : ''}`} onClick={() => show && window.scrollTo(0, 0)}>
      <img src={backToTop} style={{ width: 50, height: 50 }} alt="back-to-top" />
    </div>
  );
};

export default BackTopTop;
