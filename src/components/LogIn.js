import React from 'react';

function Login() {
  return(
    <div className="login-page">
      <div className="input-container">
        <h2>Employee Polls</h2>
        <h3>Login</h3>
        <h4>User</h4>
        <input 
          type="text"
          placeholder="User"
          value=""
          onChange=""
        />
        <h4>Password</h4>
        <input 
          type="text"
          placeholder="Password"
          value=""
          onChange=""
        />
        <button>
          Submit
        </button>
      </div>
    </div>
  )
}
export default Login;