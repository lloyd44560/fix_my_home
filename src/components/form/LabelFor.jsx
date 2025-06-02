import React from 'react';

const LabelFor = ({ name, text, required }) => {
  return (
    <label htmlFor={name} style={{ fontWeight: 'normal', display: 'block', marginBottom: 4 }}>
      {text}
      {required === 'yes' && <span style={{ color: 'red' }}> *</span>}
    </label>
  );
};

export default LabelFor;