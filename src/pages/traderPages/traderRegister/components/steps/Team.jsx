import React from 'react';
import { 
    Box, Button, IconButton, 
    Paper, Typography, 
} from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material';

import Modal from '../../../../../components/form/Modal';

const Team = ({ 
    formData, 
    handleChange, 
    licenses, 
    handleAddLicense, 
    handleDeleteLicense, 
    openModal, 
    setOpenModal, 
    newLicense, 
    setNewLicense, 
}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
);

export default Team;