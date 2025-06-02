import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

import { TextInput } from './InputFields';

const Modal = ({
  open,
  onClose,
  onSave,
  value,
  type = 'number',
  onChange,
  title,
  label,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextInput
          fullWidth
          type={type}
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

export default Modal;
