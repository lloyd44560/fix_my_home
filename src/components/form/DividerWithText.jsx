import React from 'react';

export default function DividerWithText({ text }) {
  return (
    <div className="my-8 flex items-center">
      <div className="flex-grow border-b border-gray-300" />
      <span className="mx-4 text-gray-600 text-sm font-medium">{text}</span>
      <div className="flex-grow border-b border-gray-300" />
    </div>
  );
}
