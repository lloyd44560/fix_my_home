import React, { useState } from 'react';
import {
  Button, Box, MenuItem, 
  useMediaQuery, useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TextInput } from '../../../components/form/InputFields';
import ButtonFooter from './components/ButtonFooter';

import Details from './components/steps/Details';
import Company from './components/steps/Company';
import Team from './components/steps/Team';
const steps = ['Details', 'Company', 'Team', 'Rates'];

const industries = [
  'Air Conditioning',
  'Cleaning',
  'Electrical',
  'Gardening',
  'General Maintenance',
  'Glazing',
  'Pest Control',
  'Plumbing/Gas',
  'Tree Cutting',
  'Steelworks',
];

const TraderRegisterPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: '', phone: '',
    companyType: '', companyName: '', companyAddress: '', companyEmail: '',
    companyLandline: '', contractorLicence: '', license: '', gstRegistered: false,
    abn: '', industry: '', otherIndustry: '',
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
          industries={industries}
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
