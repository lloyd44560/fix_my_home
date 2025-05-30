import React from 'react';
import { Button } from '@mui/material';

export const PrimaryButton = ({ text, variant, onClick, sx, className}) => {
  return (
    <Button variant={variant} onClick={onClick}
      fullWidth className={className} sx={sx}>
      {text}
    </Button>
  );
};