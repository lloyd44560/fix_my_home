import React from 'react';
import { 
    Box, Button, IconButton, 
    Paper, Typography, 
} from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material';
import { TextInput } from '../../../../../components/form/InputFields';

import Modal from '../../../../../components/form/Modal';
import LabelFor from '../../../../../components/form/LabelFor';
import RateInput from '../RateInput';

const Team = ({ 
    formData, 
    handleChange, 
    data, 
    handleAddData, 
    handleDeleteData, 
    openModal, 
    setOpenModal, 
    newData, 
    setNewData, 
}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Box>
      <Button variant="outlined" fullWidth startIcon={<Add />} onClick={() => setOpenModal(true)} sx={{ my: 2 }}>
        Add team member
      </Button>

      {licenses.length > 0 && (
        <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
          <Typography variant="subtitle1" gutterBottom>Added Team Members</Typography>
          {licenses.map((val, index) => (
            <Box key={index} display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
              <h1>{val}</h1>
              <Box>
                <IconButton size="small" color="primary"><Edit fontSize="small" /></IconButton>
                <IconButton size="small" color="error" onClick={() => handleDeleteLicense(index)}><Delete fontSize="small" /></IconButton>
              </Box>
            </Box>
          ))}
        </Paper>
      )}

      <Modal 
          open={openModal} 
          onClose={() => { setNewLicense(''); setOpenModal(false); }} 
          onSave={handleAddLicense} 
          value={newLicense} 
          type='text'
          label='Member Name'
          title='Add new member'
          onChange={setNewLicense} />
    </Box>
    <Box>
      <LabelFor name="memberName" text="Team member name" required="yes" />
      <TextInput id="memberName" name="memberName" required onChange={handleChange} value={formData.memberName} />
    </Box>
    <Box>
      <LabelFor name="memberPosition" text="Position" required="yes" />
      <TextInput id="memberPosition" name="memberPosition" required onChange={handleChange} value={formData.memberPosition} />
    </Box>
    <Box>
      <RateInput
        label="Labour (per hour)"
        description="Your team member’s rate per hour"
      />
      <RateInput
        label="Callout rate"
        description="Team member’s travel and logistics expenses"
      />
    </Box>
    <Box>
      <LabelFor name="employeeContact" text="Employee contact number (if available)" required="yes" />
      <TextInput id="employeeContact" name="employeeContact" required onChange={handleChange} value={formData.employeeContact} />
    </Box>
    <Box>
      <LabelFor name="employeeEmail" text="Employee email (if available)" required="yes" />
      <TextInput id="employeeEmail" name="employeeEmail" required onChange={handleChange} placeholder="name@email.com" value={formData.employeeEmail} />
    </Box>
    <Box>
      <LabelFor name="activePostals" text="Active postal codes" required="yes" />
      <TextInput id="activePostals" name="activePostals" required onChange={handleChange} placeholder="3070, 3071, 3072" value={formData.activePostals} />
    </Box>
  </Box>
);

export default Team;