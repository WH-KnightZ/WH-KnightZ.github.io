import React from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CRow,
  CInvalidFeedback,
  CFormGroup,
} from '@coreui/react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import config from '../../config';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToast } from '../../stores/toast/actions';
import { loadingRequest } from '../../stores/loading/actions';

const initialValues = {
  email: '',
};

const validationSchema = function (values) {
  return Yup.object().shape({
    email: Yup.string()
      .min(3, 'Email least 3 character')
      .email('Invalid email address')
      .required('Email is required!'),
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

const ConfirmEmail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (values, { setSubmitting, setErrors }) => {
    const data = JSON.stringify(values);
    dispatch(loadingRequest());
    axios
      .post(config.rest.forgotPassword(), data, {
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
                        <h1> Reset Password </h1>
                        <p className="text-muted"> Reset Password</p>

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

                        <CFormGroup>
                          <CRow>
                            <CCol xs="6">
                              <CButton color="primary" className="px-4" type="submit">
                                Reset Password
                              </CButton>
                            </CCol>
                            <CCol xs="6" className="confirm--password--btn">
                              <CButton color="secondary" className="px-4" to="/login">
                                Cancel
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

export default ConfirmEmail;
