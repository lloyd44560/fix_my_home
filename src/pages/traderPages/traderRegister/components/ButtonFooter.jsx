import React from 'react';
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button
} from '@mui/material';
import { FiArrowLeft } from 'react-icons/fi';

import { styled } from '@mui/material/styles';
import StepConnector from '@mui/material/StepConnector';
const NoLineConnector = styled(StepConnector)(() => ({
  '&.MuiStepConnector-root': {
    display: 'none',
  },
}));

const ButtonFooter = ({
  isMobile,
  activeStep,
  steps,
  handleBack,
  handleNext,
  handleSubmit,
  renderStepContent,
}) => {
  return (
    <Box sx={{ width: '90%', maxWidth: 600, mx: 'auto', mt: isMobile ? 2 : 4, px: isMobile ? 1 : 3 }}>
      <Typography
        variant={isMobile ? "h5" : "h6"}
        fontWeight="bold"
        align="center"
        sx={{ mb: isMobile ? 1 : 2 }}
      >
        Register as Trader
        <br /><br />
      </Typography>

      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<NoLineConnector />}
        sx={{
          mb: isMobile ? 2 : 4,
          '& .MuiStepLabel-label': { fontSize: isMobile ? '0.8rem' : '1rem' }
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
              '&:hover': { backgroundColor: '#4da1ff' },
              borderRadius: 2,
              px: isMobile ? 2 : 4
            }}
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
              '&:hover': { backgroundColor: '#4da1ff' },
              borderRadius: 2,
              px: isMobile ? 2 : 4
            }}
          >
            Continue
          </Button>
        )}
      </Box>

      <Box sx={{ my: 3, textAlign: 'center', width: '100%' }}>
        <Typography variant="body2">
          Already have an account?{' '}
          <a
            href="/login"
            style={{ color: '#086cfc', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Login Here
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default ButtonFooter;
