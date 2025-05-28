import React from 'react';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-screen-xl w-full bg-white shadow sm:rounded-lg flex flex-col lg:flex-row justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="my-6 text-center">
            <div className="text-sm text-gray-600 tracking-wide font-bold mt-4">
              Login as Renter
            </div>
          </div>

          <div className="flex flex-col items-start mt-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Welcome To</h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">Fix My House.</h1>

            <div className="w-full mt-4">
              <div className="max-w-md w-full mx-auto">
                <div className="mb-4">
                  <input
                    className="w-full px-6 py-3 rounded-lg border border-gray-200 
                    placeholder-gray-500 text-sm focus:outline-none focus:border-[#0000FF] 
                    focus:bg-white transition duration-200"
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full px-6 py-3 rounded-lg border border-gray-200 
                    placeholder-gray-500 text-sm focus:outline-none focus:border-[#0000FF] 
                    focus:bg-white transition duration-200"
                    type="password"
                    placeholder="Password"
                  />
                </div>

                <span className="text-gray-600 text-sm font-medium">Forgot Password?</span>

                <button
                  className="w-full mt-5 font-semibold bg-[#086cfc] text-white py-3 rounded-lg 
                  hover:bg-[#4795fd] transition duration-300 flex items-center justify-center"
                >
                  <span className="ml-2">Login</span>
                </button>

                <div className="text-center mt-4">
                  <span className="text-gray-600 text-sm font-medium">
                    Not a member? <a href="register/"
                    className="text-[#086cfc] font-semibold">Register Now</a>
                  </span>
                </div>

                <div className="my-8 flex items-center">
                  <div className="flex-grow border-b border-gray-300"></div>
                  <span className="mx-4 text-gray-600 text-sm font-medium">Or continue with</span>
                  <div className="flex-grow border-b border-gray-300"></div>
                </div>

                <div className="flex justify-center space-x-4">
                  <button className="bg-[#DB4437] w-10 h-10 rounded-full text-white font-bold">G</button>
                  <button className="bg-[#1877F2] w-10 h-10 rounded-full text-white font-bold">f</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side image container (optional, visible on large screens) */}
        <div className="hidden lg:flex flex-1 bg-indigo-100 text-center">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            {/* Optional image here */}
          </div>
        </div>
      </div>
    </div>
  );
}
