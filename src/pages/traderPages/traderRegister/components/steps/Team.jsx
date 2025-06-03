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
    data, 
    handleAddData, 
    handleDeleteData, 
    openModal, 
    setOpenModal, 
    newData, 
    setNewData, 
}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Button variant="outlined" fullWidth startIcon={<Add />} onClick={() => setOpenModal(true)} sx={{ my: 2 }}>
      Add team member
    </Button>

    {data.length > 0 && (
      <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>Added Team Members</Typography>
        {data.map((val, index) => (
          <Box key={index} display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
            <h1>{val}</h1>
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
        value={newData} 
        type='text'
        label='Member Name'
        title='Add new member'
        onChange={setNewData} />

  </Box>
);

export default Team;