import React from 'react';

export default function Section({ title, children }) {
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
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      {children}
    </div>
  );
}