import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import {
  Stepper, Step, StepLabel,
  Button, Typography, Box, MenuItem,
  useMediaQuery, useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import StepConnector from '@mui/material/StepConnector';

import {TextInput, PasswordInput} from '../../components/form/InputFields';

const steps = ['My Details', 'Agent Details', 'House Details'];

const NoLineConnector = styled(StepConnector)(() => ({
  '&.MuiStepConnector-root': {
    display: 'none',
  },
}));

const TraderRegisterPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: '', phone: '',
    company: '', contactPerson: '', contactPhone: '', contactAddress: '',
    state: '', zip: '', city: '',
    uploadOption: '', floorCount: '', roomCount: '', roomType: '', address1: '', address2: '', houseZip: '', houseState: '', houseCity: '', propertyImage: null,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    navigate('/home');
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextInput label="Name" name="name" required onChange={handleChange} value={formData.name} />
            <TextInput label="Email" name="email" type="email" required onChange={handleChange} value={formData.email} />
            <TextInput label="Phone Number" name="phone" required onChange={handleChange} value={formData.phone} />
            <PasswordInput label="Password" name="password" show={showPassword} toggleShow={() => setShowPassword(!showPassword)} onChange={handleChange} value={formData.password} />
            <PasswordInput label="Confirm Password" name="confirmPassword" show={showConfirmPassword} toggleShow={() => setShowConfirmPassword(!showConfirmPassword)} onChange={handleChange} value={formData.confirmPassword} />
          </Box>
        );

      case 1:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextInput label="Company Name" name="company" onChange={handleChange} value={formData.company} />
            <TextInput label="Contact Person" name="contactPerson" onChange={handleChange} value={formData.contactPerson} />
            <TextInput label="Contact Phone" name="contactPhone" onChange={handleChange} value={formData.contactPhone} />
            <TextInput label="Contact Address" name="contactAddress" onChange={handleChange} value={formData.contactAddress} />
            <TextInput label="State" name="state" onChange={handleChange} value={formData.state} />
            <TextInput label="City" name="city" onChange={handleChange} value={formData.city} />
            <TextInput label="ZIP Code" name="zip" onChange={handleChange} value={formData.zip} />
          </Box>
        );

      case 2:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextInput
              select
              label="Upload Option"
              name="uploadOption"
              value={formData.uploadOption}
              onChange={handleChange}
            >
              <MenuItem value="manual">Manually Upload Property Details</MenuItem>
              <MenuItem value="report">Upload Property Reports</MenuItem>
            </TextInput>

            {formData.uploadOption === 'manual' && (
              <>
                <Button variant="outlined" component="label" sx={{ borderRadius: 2 }}>
                  Upload Property Photo
                  <input type="file" hidden name="propertyImage" onChange={handleChange} />
                </Button>
                <TextInput label="Floor Count" name="floorCount" onChange={handleChange} value={formData.floorCount} />
                <TextInput label="Room Count" name="roomCount" onChange={handleChange} value={formData.roomCount} />
                <TextInput label="Room Type" name="roomType" onChange={handleChange} value={formData.roomType} />
                <TextInput label="Address Line 1" name="address1" onChange={handleChange} value={formData.address1} />
                <TextInput label="Address Line 2" name="address2" onChange={handleChange} value={formData.address2} />
                <TextInput label="State" name="houseState" onChange={handleChange} value={formData.houseState} />
                <TextInput label="City" name="houseCity" onChange={handleChange} value={formData.houseCity} />
                <TextInput label="ZIP Code" name="houseZip" onChange={handleChange} value={formData.houseZip} />
              </>
            )}
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '90%', maxWidth: 600, mx: 'auto', mt: isMobile ? 2 : 4, px: isMobile ? 1 : 3 }}>
      <Typography variant={isMobile ? "h5" : "h6"} fontWeight="bold" align="center" sx={{ mb: isMobile ? 1 : 2 }}>
        Register as Trader
        <br /><br />
      </Typography>

      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<NoLineConnector />}
        sx={{ mb: isMobile ? 2 : 4, '& .MuiStepLabel-label': { fontSize: isMobile ? '0.8rem' : '1rem' } }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Button
        onClick={handleBack}
        sx={{ mb: isMobile ? 1 : 2, minWidth: '40px', padding: 0 }}
        startIcon={<FiArrowLeft />}
        disabled={activeStep === 0}
      >
        {isMobile ? '' : 'Back'}
      </Button>

      <Box sx={{ my: isMobile ? 1 : 2 }}>{renderStepContent(activeStep)}</Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {activeStep === steps.length - 1 ? (
          <Button
            variant="contained"
            onClick={handleSubmit}
            fullWidth
            sx={{ backgroundColor: '#086cfc', color: '#fff', '&:hover': { backgroundColor: '#4da1ff' }, borderRadius: 2, px: isMobile ? 2 : 4 }}
          >
            Submit
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleNext}
            fullWidth
            sx={{ backgroundColor: '#086cfc', '&:hover': { backgroundColor: '#4da1ff' }, borderRadius: 2, px: isMobile ? 2 : 4 }}
          >
            Continue
          </Button>
        )}
      </Box>

      <Box sx={{ mt: 2, textAlign: 'center', width: '100%' }}>
        <Typography variant="body2">
          Already have an account?{' '}
          <a href="/login" style={{ color: '#086cfc', textDecoration: 'none', fontWeight: 'bold' }}>
            Login Here
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default TraderRegisterPage;
