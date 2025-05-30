import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function SectionToggle({ title, isExpanded, onToggle, children }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: 16,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={onToggle}
      >
        <h2 style={{ margin: 0 }}>{title}</h2>
        {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
      {isExpanded && <div style={{ marginTop: 10 }}>{children}</div>}
    </div>
  );
}
