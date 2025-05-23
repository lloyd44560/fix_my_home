import React from 'react';

export default function LoginPage() {
  return (
      <div className="flex justify-center items-center h-screen">
      {/* <h1 className="text-3xl font-bold">Register Page</h1> */}
        <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="my-12 text-center">
            <div className="text-sm text-gray-600 tracking-wide font-bold mt-4">
              Login as Renter
            </div>
          </div>

            <div class="mt-12 flex flex-col items-left">
              
            
             <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Welcome To
            </h1>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Fix My House.
            </h1>
                 
                <div class="w-full flex-1 mt-8">
                    <div class="flex flex-col items-center">
                    </div>
                    
                <div class="max-w-md mx-auto">
                  
                  <div class="mb-5">
                   
                    <input
                      class="w-[450px] px-8 py-4 rounded-lg font-medium  border border-gray-200 
                            placeholder-gray-500 text-sm focus:outline-none focus:border-[#0000FF] 
                            focus:bg-white transition-all duration-200 ease-in-out"
                      type="text" placeholder="Email Address" />
                  </div>
                  <div class="mb-5">
                
                    <input
                      class="w-[450px] px-8 py-4 rounded-lg font-medium  border border-gray-200 
                            placeholder-gray-500 text-sm focus:outline-none focus:border-[#0000FF] 
                            focus:bg-white transition-all duration-200 ease-in-out"
                      type="password" placeholder="Password" />
                  </div>
       
       <span className="mx-4 text-gray-600 text-sm font-medium">Forgot Password?</span>
      <button 
        className="w-[450px] mt-5 tracking-wide font-semibold bg-[#086cfc] text-white py-4 rounded-lg 
                  hover:bg-[#4795fd] transition-all duration-300 ease-in-out flex items-center justify-center 
                  focus:shadow-outline focus:outline-none">
        <span className="ml-3">Login</span>
        
      </button>
      <br />
      <center>      <span className="mx-4 text-gray-600 text-sm font-medium">Not a member? <a href='' >Register Now</a> </span> </center>
          

         
           <div class="my-12 ">
                   
              </div>
             
              
            </div>
              


                <div className="my-12 flex items-center">
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

        
        <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
               >
            </div>
        </div>
        </div>


      
    </div>

  );
}
