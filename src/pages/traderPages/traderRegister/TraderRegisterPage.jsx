import React, { useState } from 'react';
import {
  useMediaQuery, useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonFooter from './components/ButtonFooter';

import Details from './components/steps/Details';
import Company from './components/steps/Company';
import Team from './components/steps/Team';
import Rates from './components/steps/Rates';
const steps = ['Details', 'Company', 'Team', 'Rates'];

const TraderRegisterPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: '', phone: '',
    companyType: '', companyName: '', companyAddress: '', companyEmail: '',
    companyLandline: '', contractorLicence: '', license: '', gstRegistered: false,
    abn: '', industry: '', otherExpertise: '', state: '', municipality: '',
    city: '', 
  });

  const [licenses, setLicenses] = useState([]);
  const [newLicense, setNewLicense] = useState('');
  const [openModal, setOpenModal] = useState(false);

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

  const handleAddLicense = () => {
    if (newLicense.trim() === '') return;
    setLicenses((prev) => [...prev, newLicense.trim()]);
    setNewLicense('');
    setOpenModal(false);
  };

  const handleDeleteLicense = (index) => {
    setLicenses(licenses.filter((_, i) => i !== index));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <Details formData={formData}
          handleChange={handleChange}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showConfirmPassword={showConfirmPassword}
          setShowConfirmPassword={setShowConfirmPassword} />;

      case 1:
        return <Company 
          formData={formData}
          handleChange={handleChange}
          licenses={licenses}
          handleAddLicense={handleAddLicense}
          handleDeleteLicense={handleDeleteLicense}
          openModal={openModal}
          setOpenModal={setOpenModal}
          newLicense={newLicense}
          setNewLicense={setNewLicense}
          setFormData={setFormData} />;

      case 2:
        return <Team
          formData={formData}
          handleChange={handleChange}
          licenses={licenses}
          handleAddLicense={handleAddLicense}
          handleDeleteLicense={handleDeleteLicense}
          openModal={openModal}
          setOpenModal={setOpenModal}
          newLicense={newLicense}
          setNewLicense={setNewLicense} />;
      
      case 3:
        return <Rates 
          formData={formData}
          handleChange={handleChange}
          setFormData={setFormData} />;

      default:
        return null;
    }
  };

  return <ButtonFooter
    isMobile={isMobile}
    activeStep={activeStep}
    steps={steps}
    handleBack={handleBack}
    handleNext={handleNext}
    handleSubmit={handleSubmit}
    renderStepContent={renderStepContent}
  />;
};

export default TraderRegisterPage;
