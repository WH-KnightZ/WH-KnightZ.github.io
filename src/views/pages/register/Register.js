import React, { useState } from 'react';
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
  CCardFooter,
} from '@coreui/react';
import { useHistory } from 'react-router-dom';
import CIcon from '@coreui/icons-react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../../config';
import { addToast } from '../../../stores/toast/actions';
import { useDispatch } from 'react-redux';
import { loadingRequest } from '../../../stores/loading/actions';

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  // role: "",
};

const validationSchema = function (values) {
  return Yup.object().shape({
    first_name: Yup.string()
      .min(2, `First name has to be at least 2 characters`)
      .required('First name is required'),
    //.matches(/[A-Za-z_äöüÄÖÜùûüÿàâæéèêëïîôœÙÛÜŸÀÂÆÉÈÊËÏÎÔŒ' ]{\(1),\(50)}/,'Invalid First Name'),
    last_name: Yup.string()
      .min(1, `Last name has to be at least 1 character`)
      .required('Last name is required'),
    // phone: Yup.number()
    //   .min(10, `Số điện thoại phải ít nhất 10 số`)
    //   .required("Phone is required"),
    email: Yup.string()
      .min(3, 'Email least 3 character')
      .email('Invalid email address')
      .required('Email is required!'),
    password: Yup.string()
      .min(8, 'Password least 8 characters')
      .required('Password is required!')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\\-_=+{}|?>.<,:;]).{8,16}$/,
        'Password must contain: numbers, uppercase and lowercase letters\n'
      ),
    // role: Yup.bool()
    //   .required("* required")
    //   .test((value) => value === true),
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

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [isUser, setIsUser] = useState(true);

  const onSubmit = (values, { setSubmitting, setErrors }) => {
    console.log(values);
    const data = JSON.stringify(values);

    dispatch(loadingRequest());

    if (isUser) {
      axios
        .post(config.rest.signUpUser(), data, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then(function (response) {
          const data = response.data;
          if (!data.message.status) throw new Error(data.message.text);

          dispatch(addToast(data.message.text));
          history.push('/login');
        })
        .catch(function (err) {
          dispatch(addToast(err.toString()));
        });
    } else {
      axios
        .post(config.rest.signUpNurse(), data, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then(function (response) {
          const data = response.data;
          if (!data.message.status) throw new Error(data.message.text);

          dispatch(addToast(data.message.text));
          history.push('/login');
        })
        .catch(function (err) {
          dispatch(addToast(err.toString()));
        });
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="9" xl="8">
            <CCardGroup>
              <CCard>
                <CCardBody className="p-4">
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
                        <h1> Sign Up</h1>
                        <p className="text-muted"> Create your account </p>
                        <CFormGroup>
                          <CInputGroup className="mb-3">
                            <CInput
                              type="text"
                              placeholder="First Name"
                              autoComplete="first_name"
                              name="first_name"
                              value={values.first_name}
                              onChange={handleChange}
                              invalid={touched.first_name && !!errors.first_name}
                            />
                            <CInvalidFeedback>{errors.first_name}</CInvalidFeedback>
                          </CInputGroup>
                        </CFormGroup>
                        <CFormGroup>
                          <CInputGroup className="mb-3">
                            <CInput
                              type="text"
                              placeholder="Last Name"
                              autoComplete="last_name"
                              name="last_name"
                              value={values.last_name}
                              onChange={handleChange}
                              invalid={touched.last_name && !!errors.last_name}
                            />
                            <CInvalidFeedback>{errors.last_name}</CInvalidFeedback>
                          </CInputGroup>
                        </CFormGroup>
                        <CFormGroup>
                          <CInputGroup className="mb-3">
                            <CInput
                              type="text"
                              placeholder="Email"
                              autoComplete="email"
                              name="email"
                              values={values.email}
                              onChange={handleChange}
                              invalid={touched.email && !!errors.email}
                            />
                            <CInvalidFeedback>{errors.email}</CInvalidFeedback>
                          </CInputGroup>
                        </CFormGroup>
                        <CFormGroup>
                          <CInputGroup className="mb-3">
                            <CInput
                              type={passwordShown ? 'text' : 'password'}
                              placeholder="Password"
                              autoComplete="new-password"
                              name="password"
                              values={values.password}
                              onChange={handleChange}
                              invalid={touched.password && !!errors.password}
                            />
                            <CInputGroupPrepend>
                              <CInputGroupText onClick={togglePasswordVisiblity}>
                                <CIcon name="cil-lock-locked" />
                              </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInvalidFeedback>{errors.password}</CInvalidFeedback>
                          </CInputGroup>
                        </CFormGroup>
                        <CFormGroup>
                          <CRow>
                            <CCol xs="6">
                              <CButton color="primary" type="submit" block>
                                Create Account
                              </CButton>
                            </CCol>{' '}
                          </CRow>
                        </CFormGroup>
                      </CForm>
                    )}
                  </Formik>
                </CCardBody>
                <CCardFooter className="ccard-footer__register">
                  <CRow className="ccard-footer__register--item">
                    <CCol>
                      By signing up you agree to our{' '}
                      <Link to="#" className="ccard-footer__register--link">
                        Term of Use
                      </Link>
                      {' and '}
                      <Link to="#" className="ccard-footer__register--link">
                        Privacy Policy
                      </Link>
                    </CCol>
                  </CRow>

                  <CRow className="ccard-footer__register--item">
                    <CCol>
                      <span
                        onClick={() => setIsUser(!isUser)}
                        style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                        {isUser ? 'Become a nurse' : 'Become a user'}
                      </span>
                    </CCol>
                  </CRow>
                </CCardFooter>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div style={{ marginTop: '3rem' }}>
                    <h2>Sign In</h2>
                    <div>Already have an account?</div>
                    <Link to="/login" className="register__button">
                      Sign in Now!
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

export default Register;
