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

export const LoginButton = ({ text, variant, onClick, sx, className}) => {
  return (
    <button
      onClick={onClick}
      className="w-full font-semibold bg-[#086cfc] text-white py-3 rounded-lg 
                hover:bg-[#4795fd] transition duration-300 flex items-center justify-center">
      <span className="ml-2">{text}</span>
    </button>
  );
};