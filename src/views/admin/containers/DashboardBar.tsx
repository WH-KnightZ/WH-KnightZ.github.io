import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashboardBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSidebar={() => setOpen(true)} />
      <Sidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
    </>
  );
};

export default DashboardBar;
