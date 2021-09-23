import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import MaterialIcon from 'components/materialIcon/MaterialIcon';
import React, { useCallback, useState } from 'react';

interface Props {
  autoFocus?: boolean;
  autoComplete?: string;
  placeholder?: string;
  type?: string;
  name: string;
  value?: string;
  onFocus?: Function;
  onBlur?: Function;
  onChange?: any;
  fullWidth?: boolean;
  disabled?: boolean;
  label?: string;
  error?: any;
  invalid?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';
  margin?: string;
  readOnly?: boolean;
  size?: any;
  InputProps?: any;
}

const FocusInput: React.FC<Props> = (props) => {
  const [isFocusing, setIsFocusing] = useState(false);

  const {
    fullWidth = true,
    type = 'text',
    name = '',
    label = '',
    error,
    value,
    onFocus,
    onBlur,
    invalid: oldInvalid,
    variant = 'outlined',
    margin,
    InputProps,
    ...rest
  } = props;

  const isPassword = type === 'password';

  const [passwordShown, setPasswordShown] = useState(!isPassword);

  /**
   * When input is focus, save status focus to this field name
   */
  const handleFocus = useCallback((e: any) => {
    setIsFocusing(true);
    onFocus?.(e);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Reset status focus when blur field
   */
  const handleBlur = useCallback((e: any) => {
    setIsFocusing(false);
    onBlur?.(e);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const invalid = !isFocusing && oldInvalid;

  return (
    <TextField
      {...rest}
      fullWidth={fullWidth}
      label={label}
      name={name}
      onFocus={handleFocus}
      onBlur={handleBlur}
      type={isPassword ? (passwordShown ? 'text' : 'password') : type}
      value={value}
      InputProps={
        isPassword
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => (isPassword ? setPasswordShown(!passwordShown) : {})} edge="end">
                    <MaterialIcon icon={passwordShown ? 'visibility_off' : 'visibility'} />
                  </IconButton>
                </InputAdornment>
              ),
            }
          : InputProps
      }
      error={invalid}
      helperText={invalid && error}
      variant={variant}
    />
  );
};

export default FocusInput;
