import "@styles/globals.css";
import { NavLoginPage } from '@components/Nav';
import React from 'react'

export const metadata = {
    title: "Login Page",
  };
  
const LoginLayout = () => {
  return (
    <div>
      <NavLoginPage />
    </div>
  )
}

export default LoginLayout;

