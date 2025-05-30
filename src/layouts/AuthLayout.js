import React from 'react';

const AuthLayout = ({ children, title }) => (
  <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
    <div className="max-w-screen-xl w-full bg-white shadow sm:rounded-lg flex flex-col lg:flex-row justify-center flex-1">
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div className="text-center my-6">
          <div className="text-sm text-gray-600 tracking-wide font-bold mt-4">
            {title}
          </div>
        </div>
        {children}
      </div>
      <div className="hidden lg:flex flex-1 bg-indigo-100 text-center">
        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"></div>
      </div>
    </div>
  </div>
);

export default AuthLayout;
