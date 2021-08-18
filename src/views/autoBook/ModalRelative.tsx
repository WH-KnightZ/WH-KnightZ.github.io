import * as Yup from 'yup';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { FocusInput } from 'components';
import { Form, FormikProvider, useFormik } from 'formik';
import React, { useEffect } from 'react';

const Schema = Yup.object().shape({
  email: Yup.string().email('Email không hợp lệ!').required(),
});

interface Props {
  show: boolean;
  type: 'create' | 'update';
  onClose?: any;
  initialValues: { [key: string]: any };
  setRelatives: any;
}

const ModalRelative: React.FC<Props> = (props) => {
  const { show, type, onClose, initialValues, setRelatives } = props;

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Schema,
    onSubmit: ({ email, first_name, last_name }) => {
      setRelatives((relatives: any) => {
        if (relatives.findIndex((item: any) => item.email === email) !== -1) return relatives;
        return [{ email, first_name, last_name }, ...relatives];
      });
      onClose();
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
          <DialogTitle>{type === 'create' ? 'Thêm Người Thân' : 'Sửa Người Thân'}</DialogTitle>
          <DialogContent>
            <Box py={1}>
              <FocusInput
                label="Email"
                type="email"
                {...getFieldProps('email')}
                invalid={!!values.email && !!errors.email}
                error={errors.email}
              />
            </Box>
            <Box py={1}>
              <FocusInput
                label="Họ"
                {...getFieldProps('last_name')}
                invalid={!!values.last_name && !!errors.last_name}
                error={errors.last_name}
              />
            </Box>
            <Box py={1}>
              <FocusInput
                label="Tên"
                {...getFieldProps('first_name')}
                invalid={!!values.first_name && !!errors.first_name}
                error={errors.first_name}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Box mr={1} mb={1}>
              <Button type="button" onClick={onClose} color="primary">
                Hủy
              </Button>
            </Box>
            <Box mr={1} mb={1}>
              <Button type="submit" variant="contained" color="primary" disabled={!isValid || !dirty}>
                {type === 'create' ? 'Thêm' : 'Sửa'}
              </Button>
            </Box>
          </DialogActions>
        </Form>
      </FormikProvider>
    </Dialog>
  );
};

export default ModalRelative;
