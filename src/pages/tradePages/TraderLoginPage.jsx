import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import {TextInput} from '../../components/form/InputFields';
import { Box } from '@mui/material';

import PrimaryButton from '../../components/form/PrimaryButton';
import DividerWithText from '../../components/form/DividerWithText';
import SocialButtons from '../../components/form/SocialButtons';

export default function TraderLoginPage() {
  return (
    <AuthLayout title="Login as Trader">
      <div className="flex flex-col items-start mt-4">
        <h1 className="text-3xl font-extrabold mb-6">Welcome To Fix My House.</h1>

        <div className="w-full">
          <Box sx={{ py: 1 }}>
            <TextInput label="Email Address" name="email" />
          </Box>

          <Box sx={{ py: 1 }}>
            <TextInput label="Password" name="password" type="password" />
          </Box>

          <div className="text-sm text-gray-600 font-medium mt-2">Forgot Password?</div>

          <a href="/home" className="w-full block mt-5">
            <PrimaryButton text="Login" />
          </a>

          <div className="text-center mt-4">
            <span className="text-gray-600 text-sm font-medium">
              Not a member?{' '}
              <a href="/trader/register" className="text-[#086cfc] font-semibold">Register Now</a>
            </span>
          </div>

          <DividerWithText text="Or continue with" />
          <SocialButtons />
         
        </div>
      </div>
    </AuthLayout>
  );
}
