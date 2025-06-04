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

  const [data, setData] = useState([]);
  const [newData, setNewData] = useState('');
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

  const handleAddData = () => {
    if (newData.trim() === '') return;
    setData((prev) => [...prev, setData.trim()]);
    setNewData('');
    setOpenModal(false);
  };

  const handleDeleteData = (index) => {
    setData(data.filter((_, i) => i !== index));
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
          data={data}
          handleAddData={handleAddData}
          handleDeleteData={handleDeleteData}
          openModal={openModal}
          setOpenModal={setOpenModal}
<<<<<<< HEAD
          newLicense={newLicense}
          setNewLicense={setNewLicense}
=======
          newData={newData}
          setNewData={setNewData}
>>>>>>> origin
          setFormData={setFormData} />;

      case 2:
        return <Team
          formData={formData}
          handleChange={handleChange}
          data={data}
          handleAddData={handleAddData}
          handleDeleteData={handleDeleteData}
          openModal={openModal}
          setOpenModal={setOpenModal}
          newData={newData}
          setNewData={setNewData} />;
      
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
