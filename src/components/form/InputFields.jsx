import React from 'react';
import {TextField, InputAdornment, IconButton} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const TextInput = ({ label, name, type = 'text', value, onChange, ...props }) => (
  <TextField
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

export const PasswordInput = ({ label, name, value, onChange, show, toggleShow }) => (
  <TextField
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