import React from 'react';
import { useState } from 'react';
// import { PlayCircle } from 'lucide-react'; // You can use react-icons or similar
import { useNavigate } from 'react-router-dom';


export default function LandingPage() {

  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();


  return (
    <div className="flex flex-col justify-between items-center min-h-screen bg-gradient-to-b from-white to-blue-100 text-center px-4 py-10">
      <div className="mt-20 w-full flex flex-col items-start px-6 md:px-16 animate-softSlideIn">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-left animate-softSlideIn delay-100">Welcome to</h1>
        <h2 className="text-4xl md:text-6xl font-extrabold text-blue-800 mt-2 text-left animate-softSlideIn delay-200">Fix My House.</h2>
      </div>
      

      {/* 
        <div className="flex justify-center items-center mt-10 mb-10">
          <PlayCircle className="w-16 h-16 text-blue-500 animate-pulse" />
        </div> 
      */}
   
      {!showOptions ? (
        <button
          onClick={() => setShowOptions(true)}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-10 rounded-full mt-10 transition">
          Start
        </button>
      ) : (
        <div className="flex flex-col gap-4 mt-6 md:mt-16 items-center w-full">
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 hover:bg-blue-700 text-white 
              py-2 px-6 text-base md:py-3 md:px-10 md:text-lg lg:py-4 lg:px-12 lg:text-xl 
              rounded-full transition w-3/4 md:w-[250px] lg:w-[300px]">
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="bg-blue-600 hover:bg-blue-700 text-white 
              py-2 px-6 text-base md:py-3 md:px-10 md:text-lg lg:py-4 lg:px-12 lg:text-xl 
              rounded-full transition w-3/4 md:w-[250px] lg:w-[300px]">
            Register
          </button>
        </div>
      )}
    </div>
  );
}
