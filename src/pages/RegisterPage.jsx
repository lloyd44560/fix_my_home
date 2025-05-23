import React from 'react';

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <h1 className="text-3xl font-bold">Register Page</h1> */}
        <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            
             <div class="my-12 border-b text-center">
                    <div class="text-sm text-gray-600 tracking-wide font-medium mt-4">
                        Login as Renter
                      </div>
              </div>
            <div class="mt-12 flex flex-col items-left">
                <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold">
              Welcome to
            </h1>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Fix My House.
            </h1>
                 
                <div class="w-full flex-1 mt-8">
                    <div class="flex flex-col items-center">
                    
                    </div>

                    
                <div class="max-w-md mx-auto">
                  <div class="mb-5">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      class="w-[450px] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 
                            placeholder-gray-500 text-sm focus:outline-none focus:border-[#0000FF] 
                            focus:bg-white transition-all duration-200 ease-in-out"
                      type="text" placeholder="Name" />
                  </div>

                  <div class="mb-5">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      class="w-[450px] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 
                            placeholder-gray-500 text-sm focus:outline-none focus:border-[#0000FF] 
                            focus:bg-white transition-all duration-200 ease-in-out"
                      type="text" placeholder="Email Address" />
                  </div>
                  <div class="mb-5">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Password *</label>
                    <input
                      class="w-[450px] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 
                            placeholder-gray-500 text-sm focus:outline-none focus:border-[#0000FF] 
                            focus:bg-white transition-all duration-200 ease-in-out"
                      type="password" placeholder="Create Password" />
                  </div>
                  <div class="mb-5">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
                    <input
                      class="w-[450px] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 
                            placeholder-gray-500 text-sm focus:outline-none focus:border-[#0000FF] 
                            focus:bg-white transition-all duration-200 ease-in-out"
                      type="password" placeholder="Confirm Password" />
                  </div>

                    <button 
                      class="w-[450px] mt-5 tracking-wide font-semibold bg-[#0000FF] text-white w-full py-4 rounded-lg 
                            hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      <span class="ml-3">Continue</span>
                    </button>

  <br />

  <div class="flex justify-center space-x-4">
    <button class="bg-[#DB4437] w-10 h-10 rounded-full text-white font-bold">G</button>
    <button class="bg-[#1877F2] w-10 h-10 rounded-full text-white font-bold">f</button>
  </div>
</div>


                    
                </div>
            </div>
            
        </div>

        
        <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
               >
            </div>
        </div>
        </div>


      
    </div>



  );
}
