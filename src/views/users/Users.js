import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { CBadge, CDataTable, CPagination, CButton, CInput, CSelect } from '@coreui/react';

import config from '../../config';
import axios from 'axios';
import { types, statuses } from '../../constants';

import ModalCreateUser from './ModalCreateUser';
import ModalUpdateUser from './ModalUpdateUser';

const fields = [
  'no',
  { key: 'first_name', _classes: 'font-weight-bold' },
  { key: 'last_name', _classes: 'font-weight-bold' },
  'email',
  'type',
  { key: 'status' },
  'verify_email',
  'action',
];

const Users = () => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '');
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const pageSize = 10;

  const [isLoading, setIsLoading] = useState(true);
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(currentPage);
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [data, setData] = useState({ totalPages: currentPage });
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [updateUserData, setUpdateUserData] = useState({ show: false, initialValues: {} });
  const timeOut = useRef(0);

  const searchUsers = () => {
    setIsLoading(true);
    const newPage = page - 1;
    axios
      .get(
        `${config.rest.searchUsers()}?type=${type}&status=${status}&page_size${pageSize}=&page_number=${newPage}&search_name=${searchName}`
      )
      .then(function (response) {
        setIsLoading(false);
        const data = response.data.data;
        setData({
          users: data.users.map((user, index) => {
            return { ...user, no: index + 1 + pageSize * (page - 1) };
          }),
          total: data.total,
          totalPages: Math.ceil(data.total / pageSize),
        });
      })
      .catch(function (err) {
        setIsLoading(false);
        console.log(err);
      });
  };

  const handleChange = (event) => {
    setSearchName(event.target.value);
    if (timeOut.current) clearTimeout(timeOut.current);
    timeOut.current = setTimeout(() => {
      console.log(searchName);
      searchUsers();
    }, 1000);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchUsers();
    }
  };

  const pageChange = (newPage) => {
    if (page !== newPage) {
      history.push(`/admin/users?page=${newPage}`);
      setPage(newPage);
    }
  };

  useEffect(() => {
    searchUsers();
  }, [page, type, status]);

  console.log(page, currentPage);

  let noItems = <div />;

  if (!isLoading) {
    if (!data.total) noItems = <div>No items found!</div>;
  }

  return (
    <div style={{ width: '90%', margin: '10px auto' }}>
      <ModalCreateUser show={showCreateUser} handleClose={() => setShowCreateUser(false)} />
      <ModalUpdateUser
        initialValues={updateUserData.initialValues}
        show={updateUserData.show}
        handleClose={() => setUpdateUserData({ show: false, initialValues: {} })}
      />

      <div>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20, marginBottom: 30 }}>
          <div style={{ position: 'relative', width: 220 }}>
            <CInput
              style={{ width: 220, position: 'absolute', paddingLeft: 32 }}
              type="text"
              placeholder="search"
              value={searchName}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <i
              style={{ position: 'absolute', left: 10, top: 11, color: '#777' }}
              className="fa fa-search icon"></i>
          </div>
          <CSelect
            style={{ width: 160, marginLeft: 40 }}
            value={type}
            onChange={(event) => setType(event.target.value)}>
            <option value="">Select type</option>
            {types.map((value, index) => (
              <option key={index}>{value}</option>
            ))}
          </CSelect>
          <CSelect
            style={{ width: 160, marginLeft: 40 }}
            value={status}
            onChange={(event) => setStatus(event.target.value)}>
            <option value="">Select status</option>
            {statuses.map((value, index) => (
              <option key={index}>{value}</option>
            ))}
          </CSelect>
          <div style={{ textAlign: 'right', marginRight: 60, flex: 1 }}>
            <CButton color="primary" onClick={() => setShowCreateUser(true)}>
              Add new user
            </CButton>
          </div>
        </div>
      </div>

      <CDataTable
        items={data.users}
        fields={fields}
        loading={isLoading}
        noItemsViewSlot={noItems}
        hover
        striped
        // clickableRows
        // onRowClick={(item) => history.push(`/users/${item.id}`)}
        scopedSlots={{
          status: (item) => (
            <td>
              <CBadge className="status--style--data--table">{item.status}</CBadge>
            </td>
          ),
          action: (item, index) => (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                style={{ marginRight: 10 }}>
                <i className="fas fa-sync-alt"></i>
              </CButton>
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => {
                  setUpdateUserData({ show: true, initialValues: item });
                }}>
                <i className="fas fa-pencil-alt"></i>
              </CButton>
            </td>
          ),
        }}
      />
      <CPagination
        activePage={page}
        onActivePageChange={pageChange}
        pages={data.totalPages}
        arrows={true}
        doubleArrows={true}
        align="center"
      />
      {data.users && (
        <div style={{ textAlign: 'right', marginRight: 100 }}>
          {data.users.length} of {data.total}
        </div>
      )}
    </div>
  );
};

export default Users;
