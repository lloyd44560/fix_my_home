import React from 'react';
import {
  TextField, InputAdornment, IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const TextInput = ({ label, name, type = 'text', value, onChange, ...props }) => (
  <TextField
    id={name}
    label={label}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    fullWidth
    variant="outlined"
    sx={{ borderRadius: 2, '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
    {...props}
  />
);

export const SmallTextInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  ...props
}) => (
  <TextField
    id={name}
    label={label}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    fullWidth
    size="small"
    variant="outlined"
    sx={{
      borderRadius: 2,
      '& .MuiOutlinedInput-root': {
        borderRadius: 2,
        fontSize: '0.875rem', // slightly smaller text
        padding: '6px 10px',
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.75rem', // smaller label
      },
    }}
    {...props}
  />
);

export const NumberInput = ({
  label, 
  name, 
  type = 'number', 
  value, 
  onChange, 
  min, 
  max, 
  ...props
}) => (
  <TextField
    id={name}
    label={label}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    fullWidth
    variant="outlined"
    sx={{ borderRadius: 2, '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
    InputProps={{
      inputProps: type === 'number' ? { min, max } : {},
    }}
    {...props}
  />
);

export const PasswordInput = ({ 
  label, 
  name, 
  value, 
  onChange, 
  show, 
  toggleShow 
}) => (
  <TextField
    id={name}
    label={label}
    name={name}
    type={show ? 'text' : 'password'}
    value={value}
    onChange={onChange}
    fullWidth
    variant="outlined"
    sx={{ borderRadius: 2, '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton onClick={toggleShow} edge="end" aria-label="toggle password visibility">
            {show ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
);