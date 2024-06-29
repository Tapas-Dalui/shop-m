import React from 'react'
import './CSS/LoginSignup.css'

function LoginSignUp() {
  return (
    <>
      <div className="loginsignup">
        <div className="login-container">
          <h1>Sign Up</h1>
          <div className="fields">
            <input type="text" placeholder='Enter your Name' />
            <input type="email" placeholder='Enter your Email' />
            <input type="password" placeholder='Enter password' />
            <button>Continue</button>
            <p className='login'>
              Already have an Account? <span>Login Here</span>
            </p>
            <div className="agree">
              <input className='checkbox' type="checkbox" name="" id="" />
              <div>By continuing, I agree to the terms of use & privacy policy </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginSignUp
