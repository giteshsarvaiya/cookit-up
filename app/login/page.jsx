import React from 'react'

const page = () => {
  return (
    <div class="container">
      <h2 className='LoginPage_Heading'>Login Page</h2>
      <input type="text" placeholder="Username" required/>
      <input type="password" placeholder="Password" required/>
      <button type="submit">Sign In</button>
      <div class="google-btn">
        <button type="button">Sign in with Google</button>
      </div>
  </div>
  )
}

export default page