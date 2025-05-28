import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import {
  Stepper, Step, StepLabel,
  Button, TextField, Typography, Box, MenuItem,
  InputAdornment, IconButton, useMediaQuery, useTheme
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import StepConnector from '@mui/material/StepConnector';
import { useNavigate } from 'react-router-dom';
const steps = ['My Details', 'Agent Details', 'House Details'];

const NoLineConnector = styled(StepConnector)(() => ({
  '&.MuiStepConnector-root': {
    display: 'none',
  },
}));

const PasswordInput = ({ label, name, show, toggleShow, onChange, value }) => (
  <TextField
    label={label}
    name={name}
    type={show ? 'text' : 'password'}
    required
    onChange={onChange}
    value={value}
    margin="normal"
    fullWidth
    variant="outlined"
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

const RenterRegistration = () => {
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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  // Mobile check

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleSubmit = () => {
    console.log('Form submitted:', formData);
     // Redirect to /home
    navigate('/home');
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

  const textFieldProps = {
    fullWidth: true,
    variant: 'outlined',
    sx: { borderRadius: 2, '& .MuiOutlinedInput-root': { borderRadius: 2 } }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Name" name="name" required onChange={handleChange} {...textFieldProps} />
            <TextField label="Email" name="email" type="email" required onChange={handleChange} {...textFieldProps} />
            <TextField label="Phone Number" name="phone" required onChange={handleChange} {...textFieldProps} />

           <PasswordInput
            label="Password"
            name="password"
            show={showPassword}
            toggleShow={togglePasswordVisibility}
            onChange={handleChange}
            value={formData.password}  
          />

          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            show={showConfirmPassword}
            toggleShow={toggleConfirmPasswordVisibility}
            onChange={handleChange}
            value={formData.confirmPassword}  // controlled
          />
          </Box>
        );

      case 1:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Company Name" name="company" onChange={handleChange} {...textFieldProps} />
            <TextField label="Contact Person" name="contactPerson" onChange={handleChange} {...textFieldProps} />
            <TextField label="Contact Phone" name="contactPhone" onChange={handleChange} {...textFieldProps} />
            <TextField label="Contact Address" name="contactAddress" onChange={handleChange} {...textFieldProps} />
            <TextField label="State" name="state" onChange={handleChange} {...textFieldProps} />
            <TextField label="City" name="city" onChange={handleChange} {...textFieldProps} />
            <TextField label="ZIP Code" name="zip" onChange={handleChange} {...textFieldProps} />
          </Box>
        );

      case 2:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              select
              label="Upload Option"
              name="uploadOption"
              value={formData.uploadOption}
              onChange={handleChange}
              {...textFieldProps}
            >
              <MenuItem value="manual">Manually Upload Property Details</MenuItem>
              <MenuItem value="report">Upload Property Reports</MenuItem>
            </TextField>

            {formData.uploadOption === 'manual' && (
              <>
                <Button variant="outlined" component="label" sx={{ borderRadius: 2 }}>
                  Upload Property Photo
                  <input type="file" hidden name="propertyImage" onChange={handleChange} />
                </Button>
                <TextField label="Floor Count" name="floorCount" onChange={handleChange} {...textFieldProps} />
                <TextField label="Room Count" name="roomCount" onChange={handleChange} {...textFieldProps} />
                <TextField label="Room Type" name="roomType" onChange={handleChange} {...textFieldProps} />
                <TextField label="Address Line 1" name="address1" onChange={handleChange} {...textFieldProps} />
                <TextField label="Address Line 2" name="address2" onChange={handleChange} {...textFieldProps} />
                <TextField label="State" name="houseState" onChange={handleChange} {...textFieldProps} />
                <TextField label="City" name="houseCity" onChange={handleChange} {...textFieldProps} />
                <TextField label="ZIP Code" name="houseZip" onChange={handleChange} {...textFieldProps} />
              </>
            )}
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        width: '90%',
        maxWidth: 600,
        mx: 'auto',
        mt: isMobile ? 2 : 4,
        px: isMobile ? 1 : 3,
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h6"}
        fontWeight="bold"
        align="center"
        sx={{ mb: isMobile ? 1 : 2 }}
      >
        Register as Renter
        <br></br>
         <br></br>

      </Typography>

      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<NoLineConnector />}
        sx={{
          mb: isMobile ? 2 : 4,
          '& .MuiStepLabel-label': {
            fontSize: isMobile ? '0.8rem' : '1rem',
          },
        }}
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

      <Box sx={{ my: isMobile ? 1 : 2 }}>
        {renderStepContent(activeStep)}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {activeStep === steps.length - 1 ? (
          <Button
            variant="contained"
            onClick={handleSubmit}
            fullWidth
            sx={{
              
            backgroundColor: '#086cfc',

            color: '#fff',
            '&:hover': {
              backgroundColor: '#4da1ff', // lighter blue on hover
            },
    
              
              borderRadius: 2, px: isMobile ? 2 : 4 }}
          >
            Submit
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleNext}
           fullWidth
            sx={{ 
              backgroundColor: '#086cfc',
               '&:hover': {
              backgroundColor: '#4da1ff', // lighter blue on hover
              },
            
              borderRadius: 2, px: isMobile ? 2 : 4 }}
              
          >
            Continue
          </Button>

          // Under dito is link na Already have an account? Login Here
          
        )}
      </Box>
        {/* Link to Login */}
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

export default RenterRegistration;
