import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  // CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CInvalidFeedback,
  CFormGroup,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import * as authActions from '../../../stores/auth/actions';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = function (values) {
  return Yup.object().shape({
    // first_name: Yup.string()
    //   .min(2, `First name has to be at least 2 characters`)
    //   .required("First name is required"),
    // last_name: Yup.string()
    //   .min(1, `Last name has to be at least 1 character`)
    //   .required("Last name is required"),
    // phone: Yup.number()
    //   .min(10, `Số điện thoại phải ít nhất 10 số`)
    //   .required("Phone is required"),
    email: Yup.string()
      .min(3, 'Email least 3 character')
      .email('Invalid email address')
      .required('Email is required!'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\\-_=+{}|?>.<,:;]).{8,16}$/,
        'Password must contain: numbers, uppercase and lowercase letters\n'
      ),
    // messages: Yup.string()
    //   .min(10, `Messages has to be at least ${10} characters!`)
    //.matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 'Password must contain: numbers, uppercase and lowercase letters\n')
    // .required("Messages is required")
    // .max(500, "Không được nhập quá 500 ký tự"),
    // accept: Yup.bool()
    //   .required("* required")
    //   .test(
    //     "accept",
    //     "You have to accept our Terms and Conditions!",
    //     (value) => value === true
    //   ),
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

const LoginAdmin = (props) => {
  const dispatch = useDispatch();

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const history = useHistory();

  const onSubmit = (values, { setSubmitting, setErrors }) => {
    const data = JSON.stringify(values);
    dispatch(authActions.loginAdmin(data));
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <Formik
                    initialValues={initialValues}
                    validate={validate(validationSchema)}
                    onSubmit={onSubmit}
                  >
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
                        <h1> Login </h1>
                        <p className="text-muted"> Sign In to your account </p>
                        {/* <CInputGroup className="mb-3">
                                              <CInputGroupPrepend>
                                                <CInputGroupText>
                                                  <CIcon name="cil-user" />
                                                </CInputGroupText>
                                              </CInputGroupPrepend> */}
                        <CFormGroup>
                          <CInputGroup className="mb-3">
                            <CInput
                              type="text"
                              placeholder="Email"
                              autoComplete="email"
                              //valid={!errors.email}
                              invalid={touched.email && !!errors.email}
                              name="email"
                              maxLength={50}
                              value={values.email}
                              onChange={handleChange}
                            />
                            <CInvalidFeedback>{errors.email}</CInvalidFeedback>
                          </CInputGroup>
                        </CFormGroup>
                        {/* </CInputGroup> */}
                        {/* <CInputGroup className="mb-4">
                                              <CInputGroupPrepend>
                                                <CInputGroupText>
                                                  <CIcon name="cil-lock-locked" />
                                                </CInputGroupText>
                                              </CInputGroupPrepend> */}
                        <CFormGroup>
                          <CInputGroup className="mb-3">
                            <CInput
                              type={passwordShown ? 'text' : 'password'}
                              placeholder="Password"
                              //valid={!errors.password}
                              invalid={touched.password && !!errors.password}
                              autoComplete="current-password"
                              maxLength={16}
                              value={values.password}
                              onChange={handleChange}
                              name="password"
                            />
                            <CInputGroupText>
                              <CIcon name="cil-user" onClick={togglePasswordVisiblity}></CIcon>
                            </CInputGroupText>
                            <CInvalidFeedback>{errors.password}</CInvalidFeedback>
                          </CInputGroup>
                        </CFormGroup>
                        {/* </CInputGroup> */}
                        <CFormGroup>
                          <CRow>
                            <CCol xs="6">
                              <CButton color="primary" className="px-4" type="submit">
                                Login
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
      </CContainer>
    </div>
  );
};

export default LoginAdmin;
