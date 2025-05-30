import React from 'react';

export default function PrimaryButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full font-semibold bg-[#086cfc] text-white py-3 rounded-lg 
                 hover:bg-[#4795fd] transition duration-300 flex items-center justify-center"
    >
      <span className="ml-2">{text}</span>
    </button>
  );
}
