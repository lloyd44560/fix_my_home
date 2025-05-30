import React from 'react';

export default function NavItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: active ? '#FFD700' : '#fff',
      }}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}