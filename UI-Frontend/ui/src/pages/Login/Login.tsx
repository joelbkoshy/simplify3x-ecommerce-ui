import React from 'react'
import '../../styles/Login.css'

const Login = () => {
  return (
    <div className='LoginMain-Container'>
      <div className="LoginDivContainer">
        <div className="LoginTitleContainer">
          <h2>Login</h2>
        </div>
        <div className="UserPassContainer">
          <div className="InputContainer">
            <p>Username</p>
            <input type="text" name="" id="" placeholder='Type your username' />
          </div>
          <div className="InputContainer">
            <p>Password</p>
            <input type="password" placeholder='Type your password' />
          </div>
          <div className="ForgotPasswordContainer">
            <div className="ForgotPasswordTextContainer">
              <p>Forgot Password?</p>
            </div>
          </div>
        </div>
        <div className="SubmitBtnContainer">
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login