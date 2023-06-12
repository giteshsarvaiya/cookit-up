import "@styles/globals.css";
import { NavLoginPage } from '@components/Nav';
import React from 'react'

export const metadata = {
    title: "Login Page",
  };
  
const LoginLayout = ({children}) => {
  return (
    <html lang='en'>
    <body>
    <NavLoginPage/>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          {children}
        </main>
    </body>
  </html>
  )
}

export default LoginLayout;

