import React from 'react';
import { 
    Box, Button, IconButton, 
    MenuItem, Paper, Switch, 
    Typography, FormControlLabel 
} from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material';
import LabelFor from '../../../../../components/form/LabelFor';
import { TextInput } from '../../../../../components/form/InputFields';
import Modal from '../../../../../components/form/Modal';

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
]

const Company = ({ 
    formData, 
    handleChange, 
    data, 
    handleAddData, 
    handleDeleteData, 
    openModal, 
    setOpenModal, 
    newData, 
    setNewData, 
    setFormData 
}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Box>
      <LabelFor name="companyType" text="Type of Company" required="yes" />
      <TextInput select required name="companyType" value={formData.companyType} onChange={handleChange}>
        <MenuItem value="sole_trader">Sole Trader</MenuItem>
        <MenuItem value="company">Company</MenuItem>
      </TextInput>
    </Box>
    <Box>
      <LabelFor name="companyName" text="Company Name" />
      <TextInput name="companyName" onChange={handleChange} value={formData.companyName} />
    </Box>
    <Box>
      <LabelFor name="companyAddress" text="Company Address" />
      <TextInput name="companyAddress" onChange={handleChange} value={formData.companyAddress} />
    </Box>
    <Box>
      <LabelFor name="companyEmail" text="Company Email (if available)" />
      <TextInput name="companyEmail" onChange={handleChange} value={formData.companyEmail} />
    </Box>
    <Box>
      <LabelFor name="companyLandline" text="Company landline number (if available)" />
      <TextInput name="companyLandline" onChange={handleChange} value={formData.companyLandline} />
    </Box>
    <Box>
      <LabelFor name="contractorLicence" text="Contractor license number" />
      <TextInput name="contractorLicence" onChange={handleChange} value={formData.contractorLicence} />
    </Box>
    <Box>
      <Button variant="outlined" fullWidth startIcon={<Add />} onClick={() => setOpenModal(true)} sx={{ my: 2 }}>
        Add another license
      </Button>

      {data.length > 0 && (
        <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
          <Typography variant="subtitle1" gutterBottom>Added Licenses</Typography>
          {data.map((val, index) => (
            <Box key={index} display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
              <Typography>Contractor License ***{val.slice(-4)}</Typography>
              <Box>
                <IconButton size="small" color="primary"><Edit fontSize="small" /></IconButton>
                <IconButton size="small" color="error" onClick={() => handleDeleteData(index)}><Delete fontSize="small" /></IconButton>
              </Box>
            </Box>
          ))}
        </Paper>
      )}

      <Modal 
          open={openModal} 
          onClose={() => { setNewData(''); setOpenModal(false); }} 
          onSave={handleAddData} 
          label='License Number'
          title='Add License'
          value={newData} 
          onChange={setNewData} />
    </Box>

    <Box>
      <FormControlLabel
        label="Is your company currently registered for GST?"
        control={<Switch checked={formData.gstRegistered} onChange={(e) => setFormData({ ...formData, gstRegistered: e.target.checked })} />}
      />
    </Box>
    
    <Box>
      <LabelFor name="abn" text="Australian Business Number (ABN)" />
      <TextInput name="abn" onChange={handleChange} value={formData.abn} />
    </Box>

    <Box>
      <LabelFor name="industry" text="Industry expertise" />
      <TextInput select required name="industry" value={formData.industry} onChange={handleChange}>
        <MenuItem value="" disabled>Choose an industry...</MenuItem>
        {industries.map((industry) => (
          <MenuItem key={industry} value={industry}>{industry}</MenuItem>
        ))}
      </TextInput>
    </Box>

    <Box>
      <LabelFor name="otherExpertise" text="Other areas of expertise (optional)" />
      <TextInput select name="otherExpertise" value={formData.otherExpertise} onChange={handleChange}>
        <MenuItem value="" disabled>Choose an industry...</MenuItem>
        {industries.map((industry) => (
          <MenuItem key={industry} value={industry}>{industry}</MenuItem>
        ))}
      </TextInput>
    </Box>
  </Box>
);

export default Company;