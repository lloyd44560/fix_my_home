import React from 'react';

export default function HeroBanner() {
  return (
    <div
      style={{
        height: 200,
        backgroundImage: 'url("https://via.placeholder.com/1200x300")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: '0 20px',
        borderRadius: 8,
      }}
    />
  );
}