import React from 'react';
import { Box } from '@mui/material';
import LabelFor from '../../../../../components/form/LabelFor';
import { TextInput, PasswordInput } from '../../../../../components/form/InputFields';

const Details = ({ 
    formData, 
    handleChange, 
    showPassword, 
    setShowPassword, 
    showConfirmPassword, 
    setShowConfirmPassword 
}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Box>
      <LabelFor name="name" text="Name" required="yes" />
      <TextInput id="name" name="name" required onChange={handleChange} value={formData.name} />
    </Box>
    <Box>
      <LabelFor name="email" text="Email" required="yes" />
      <TextInput name="email" type="email" required onChange={handleChange} value={formData.email} />
    </Box>
    <Box>
      <LabelFor name="phone" text="Phone Number" required="yes" />
      <TextInput name="phone" required onChange={handleChange} value={formData.phone} />
    </Box>
    <Box>
      <LabelFor name="password" text="Password" required="yes" />
      <PasswordInput name="password" show={showPassword} toggleShow={() => setShowPassword(!showPassword)} onChange={handleChange} value={formData.password} />
    </Box>
    <Box>
      <LabelFor name="confirmPassword" text="Confirm Password" required="yes" />
      <PasswordInput name="confirmPassword" show={showConfirmPassword} toggleShow={() => setShowConfirmPassword(!showConfirmPassword)} onChange={handleChange} value={formData.confirmPassword} />
    </Box>
  </Box>
);

export default Details;