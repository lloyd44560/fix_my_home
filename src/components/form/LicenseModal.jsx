import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

import { ModalInput } from '../../components/form/InputFields';

const LicenseModal = ({
  open,
  onClose,
  onSave,
  value,
  onChange,
  title = 'Add License',
  label = 'License number',
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <ModalInput
          fullWidth
          autoFocus
          margin="dense"
          label={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={onSave} disabled={!value.trim()}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LicenseModal;
