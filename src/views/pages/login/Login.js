import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CInvalidFeedback,
  CFormGroup,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
    const validationSchema = getValidationSchema(values);
    try {
      validationSchema.validateSync(values, { abortEarly: false });
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

const Login = (props) => {
  const dispatch = useDispatch();

  console.log('login');

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const onSubmit = (values, { setSubmitting, setErrors }) => {
    const data = JSON.stringify(values);
    dispatch(authActions.login(data));
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
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
                        <h1>Sign In</h1>
                        <p className="text-muted">Sign in to your account</p>
                        {/* <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend> */}
                        <CFormGroup>
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
                            <CInputGroupPrepend>
                              <CInputGroupText onClick={togglePasswordVisiblity}>
                                <CIcon name="cil-lock-locked" />
                              </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInvalidFeedback>{errors.password}</CInvalidFeedback>
                          </CInputGroup>
                        </CFormGroup>
                        {/* </CInputGroup> */}
                        <CFormGroup>
                          <CRow>
                            <CCol xs="6">
                              <CButton color="primary" className="px-4" type="submit">
                                Sign In
                              </CButton>
                            </CCol>
                            <CCol xs="6" className="forgot--password--btn">
                              <Link to="/resetPassword">Forgot Password?</Link>
                            </CCol>
                          </CRow>
                        </CFormGroup>
                      </CForm>
                    )}
                  </Formik>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign Up</h2>
                    <div>Don't have an account?</div>
                    <Link to="/register" className="register__button">
                      Sign up Now!
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
