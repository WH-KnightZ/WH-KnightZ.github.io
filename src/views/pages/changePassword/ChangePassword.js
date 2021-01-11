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
  // CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CInvalidFeedback,
  CFormGroup,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../../stores/auth/actions';
import { ls } from '../../../extensions';

const initialValues = {
  password: '',
  passwordConfirmation: '',
};

const validationSchema = function (values) {
  return Yup.object().shape({
    password: Yup.string()
      .min(8, 'Password least 8 characters')
      .required('Password is required!')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\\-_=+{}|?>.<,:;]).{8,16}$/,
        'Password must contain: numbers, uppercase and lowercase letters\n'
      ),
    passwordConfirmation: Yup.string()
      .required('Password Confirmation is required!')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\\-_=+{}|?>.<,:;]).{8,16}$/,
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

const ChangePassword = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const email = auth.email;

  const onSubmit = (values, { setSubmitting, setErrors }) => {
    const newData = {
      email: email,
      new_password: values.passwordConfirmation,
      session: ls.get('session'),
    };

    dispatch(authActions.forceChangePassword(newData));
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
                        <h1> Change Password </h1>{' '}
                        <p className="text-muted"> Change your password </p>{' '}
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
                        <CFormGroup>
                          <CInputGroup className="mb-3">
                            <CInput
                              type={passwordShown ? 'text' : 'password'}
                              placeholder="Password Confirmation"
                              //valid={!errors.password}
                              invalid={
                                touched.passwordConfirmation && !!errors.passwordConfirmation
                              }
                              autoComplete="current-password"
                              maxLength={16}
                              value={values.passwordConfirmation}
                              onChange={handleChange}
                              name="passwordConfirmation"
                            />

                            <CInputGroupText>
                              <CIcon name="cil-user" onClick={togglePasswordVisiblity}></CIcon>
                            </CInputGroupText>
                            <CInvalidFeedback>{errors.passwordConfirmation}</CInvalidFeedback>
                          </CInputGroup>
                        </CFormGroup>
                        {/* </CInputGroup> */}
                        <CFormGroup>
                          <CRow>
                            <CCol xs="6">
                              <CButton color="primary" className="px-4" type="submit">
                                Update{' '}
                              </CButton>{' '}
                            </CCol>{' '}
                          </CRow>{' '}
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

export default ChangePassword;
