import React from 'react';
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { useSelector } from 'react-redux';

import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks,
} from './index';

const TheHeader = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <CHeader withSubheader>
      <CToggler inHeader className="ml-md-3 d-lg-none" />
      <CToggler inHeader className="ml-3 d-md-down-none" />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo" />
      </CHeaderBrand>
      <CHeaderBrand style={{ fontWeight: 'bold', fontSize: '1rem' }}>
        Welcome {auth.group_name} {auth.email}
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        {/* <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="#">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="#">Users</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Settings</CHeaderNavLink>
        </CHeaderNavItem> */}
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdownNotif />
        <TheHeaderDropdownTasks />
        {/* <TheHeaderDropdownMssg /> */}
        <TheHeaderDropdown />
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
