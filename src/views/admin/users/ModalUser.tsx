import * as Yup from 'yup';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { FocusInput } from 'components';
import { Form, FormikProvider, useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useApi } from 'extensions/hooks';
import { adminAPIs } from 'extensions/configs';
import { useTranslation } from 'react-i18next';

const LoginSchema = Yup.object().shape({
  full_name: Yup.string().required(),
  email: Yup.string().email('email_not_valid').required(),
  password: Yup.string().required(),
});

interface Props {
  show: boolean;
  type: 'create' | 'update';
  onClose?: any;
  onUpdated?: any;
  initialValues: { [key: string]: any };
}

const ModalUser: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const { show, type, onClose, onUpdated, initialValues } = props;
  const { callApi } = useApi();

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: LoginSchema,
    onSubmit: ({ full_name, email, password }) => {
      callApi(
        {
          method: type === 'create' ? 'post' : 'put',
          api: adminAPIs.users(initialValues.id),
          body: { full_name, email, password, is_admin: true },
          loading: true,
        },
        ({ status }) => {
          if (status) {
            onClose();
            onUpdated?.();
          }
        },
      );
    },
  });

  const { errors, values, handleSubmit, getFieldProps, isValid, resetForm, dirty, validateForm } = formik;

  useEffect(() => {
    if (!show) return;

    resetForm();
    setTimeout(() => validateForm(), 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <Dialog open={show} fullWidth maxWidth="sm">
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <DialogTitle>{t(type === 'create' ? 'create_new_user' : 'update_user')}</DialogTitle>
          <DialogContent>
            <Box py={1}>
              <FocusInput
                label={t('full_name')}
                {...getFieldProps('full_name')}
                invalid={!!values.full_name && !!errors.full_name}
                error={t(errors.full_name?.toString() || '')}
              />
            </Box>
            <Box py={1}>
              <FocusInput
                label={t('email')}
                type="email"
                {...getFieldProps('email')}
                invalid={!!values.email && !!errors.email}
                error={t(errors.email?.toString() || '')}
              />
            </Box>
            <Box py={1}>
              <FocusInput
                autoComplete="new-password"
                label={t('password')}
                type="password"
                {...getFieldProps('password')}
                invalid={!!values.password && !!errors.password}
                error={t(errors.password?.toString() || '')}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Box mr={1} mb={1}>
              <Button type="button" onClick={onClose} color="primary">
                {t('cancel')}
              </Button>
            </Box>
            <Box mr={1} mb={1}>
              <Button type="submit" variant="contained" color="primary" disabled={!isValid || !dirty}>
                {t(type === 'create' ? 'create' : 'update')}
              </Button>
            </Box>
          </DialogActions>
        </Form>
      </FormikProvider>
    </Dialog>
  );
};

export default ModalUser;
