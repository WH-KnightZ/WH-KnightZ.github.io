import React from 'react';
import {
  CModal,
  CCol,
  CModalHeader,
  CRow,
  CModalBody,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CForm,
  CInput,
  CInputGroup,
  CInvalidFeedback,
  CFormGroup,
  CSelect,
} from '@coreui/react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import config from '../../config';
import { types, statuses } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { addToast } from '../../stores/toast/actions';

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  type: types[0],
  status: statuses[0],
};

const validationSchema = function (values) {
  return Yup.object().shape({
    first_name: Yup.string().required('First name is required!'),
    last_name: Yup.string().required('Last name Confirmation is required!'),
    email: Yup.string().required('Email Confirmation is required!'),
    password: Yup.string()
      .min(8, 'Password least 8 characters')
      .required('Password is required!')
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
        'Password must contain: numbers, uppercase and lowercase letters\n'
      ),
  });
};

const validate = (getValidationSchema) => {
  return (values) => {
    const validationSchemas = getValidationSchema(values);
    try {
      validationSchemas.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return getErrorsFromValidationError(error);
    }
  };
};

const getErrorsFromValidationError = (validationError) => {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    };
  }, {});
};

const ModalCreateUser = (props) => {
  const accessToken = useSelector((state) => state.auth.access_token);
  const dispatch = useDispatch();

  const onSubmit = (values, { setSubmitting, setErrors }) => {
    const newValues = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      type: values.type,
      status: values.status,
    };
    const data = JSON.stringify(newValues);

    axios
      .post(config.rest.createUser(), data, {
        headers: {
          'content-type': 'application/json',
          Authorization: accessToken,
        },
      })
      .then(function (response) {
        dispatch(addToast(response.data.message.text));
      })
      .catch(function (err) {
        dispatch(addToast(err.toString()));
      });

    props.handleClose();
  };

  return (
    <div className="flex-row align-items-center">
      <CModal centered show={props.show} onClose={props.handleClose}>
        <CModalHeader closeButton>Create New User </CModalHeader>
        <CModalBody className="popup--update-user">
          <CRow className="justify-content-center">
            <CCol md="12">
              <CCardGroup>
                <CCard className="popup--update-user__card--wrapper">
                  <CCardBody>
                    <Formik
                      initialValues={initialValues}
                      validate={validate(validationSchema)}
                      onSubmit={onSubmit}>
                      {({
                        values,
                        errors,
                        touched,
                        status,
                        dirty,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        isValid,
                        handleReset,
                        setTouched,
                      }) => (
                        <CForm onSubmit={handleSubmit}>
                          <CFormGroup>
                            <CInputGroup className="mb-3">
                              <CInput
                                type="text"
                                placeholder="First name"
                                invalid={touched.first_name && !!errors.first_name}
                                autoComplete="first_name"
                                maxLength={16}
                                value={values.first_name}
                                onChange={handleChange}
                                name="first_name"
                              />

                              <CInvalidFeedback>{errors.first_name}</CInvalidFeedback>
                            </CInputGroup>
                          </CFormGroup>
                          <CFormGroup>
                            <CInputGroup className="mb-3">
                              <CInput
                                type="text"
                                placeholder="Last Name"
                                //valid={!errors.password}
                                invalid={touched.last_name && !!errors.last_name}
                                autoComplete="last_name"
                                maxLength={16}
                                value={values.last_name}
                                onChange={handleChange}
                                name="last_name"
                              />

                              <CInvalidFeedback>{errors.last_name}</CInvalidFeedback>
                            </CInputGroup>
                          </CFormGroup>
                          <CFormGroup>
                            <CInputGroup className="mb-3">
                              <CInput
                                type="text"
                                placeholder="Email"
                                //valid={!errors.password}
                                invalid={touched.email && !!errors.email}
                                autoComplete="email"
                                value={values.email}
                                onChange={handleChange}
                                name="email"
                              />

                              <CInvalidFeedback>{errors.email}</CInvalidFeedback>
                            </CInputGroup>
                          </CFormGroup>

                          <CFormGroup>
                            <CInputGroup className="mb-3">
                              <CInput
                                type="password"
                                placeholder="Password"
                                //valid={!errors.password}
                                invalid={touched.password && !!errors.password}
                                autoComplete="password"
                                maxLength={16}
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                              />

                              <CInvalidFeedback>{errors.password}</CInvalidFeedback>
                            </CInputGroup>
                          </CFormGroup>
                          <CFormGroup>
                            <CSelect disabled={true}>
                              {types.map((value, index) => (
                                <option key={index}>{value}</option>
                              ))}
                            </CSelect>
                          </CFormGroup>
                          <CFormGroup>
                            <CSelect value={values.status} onChange={handleChange} name="status">
                              {statuses.map((value, index) => (
                                <option key={index}>{value}</option>
                              ))}
                            </CSelect>
                          </CFormGroup>
                          <CFormGroup>
                            <CRow>
                              <CCol xs="6">
                                <CButton color="primary" className="px-4" type="submit">
                                  Create
                                </CButton>
                              </CCol>
                            </CRow>
                          </CFormGroup>
                        </CForm>
                      )}
                    </Formik>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default ModalCreateUser;
