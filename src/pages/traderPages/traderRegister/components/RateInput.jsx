import React, { useState } from 'react';
import { SmallTextInput } from '../../../../components/form/InputFields';

const RateInput = ({ label, description }) => {
  const [rate, setRate] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleRateChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setRate(value);
    }
  };

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="mb-6">
      <div className="grid grid-cols-6 items-center gap-2 mb-4">
        {/* Label and description (col-span-4) */}
        <div className="col-span-4">
          <label className="block font-medium text-gray-700">{label}</label>
          <p className="text-sm text-gray-500">{description}</p>
        </div>

        {/* Dollar sign + input field (col-span-2) */}
        <div className="col-span-2 flex items-center">
          <span className="text-gray-500 mr-1">$</span>
          <SmallTextInput 
            type="text"
            value={rate}
            onChange={handleRateChange}
            placeholder="XX.XX"
            className="text-right w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-6 items-center gap-2 mb-4">
        <div className="col-span-3 flex items-center space-x-4">
          <button
            className="bg-blue-100 text-blue-600 rounded-full px-2 text-lg"
            onClick={decrement}>
            –
          </button>
            <span className="text-lg">{quantity}</span>
          <button
            className="bg-blue-100 text-blue-600 rounded-full px-2 text-lg"
            onClick={increment}>
            +
          </button>
        </div>
        <div className="col-span-3 flex items-center space-x-4">
          <button
            className="bg-blue-100 text-blue-600 rounded-full px-2 text-lg"
            onClick={decrement}>
            –
          </button>
            <span className="text-lg">{quantity}</span>
          <button
            className="bg-blue-100 text-blue-600 rounded-full px-2 text-lg"
            onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateInput;