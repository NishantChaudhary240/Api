import React, { useState } from "react";

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); // Added state for password

  // Handle username input change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Handle password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Function to trigger login
  const doLogin = () => {
    props.set(username);
  };

  return (
    <>
      <div className="container mt-4">
        <h1>Login Page</h1>
        <hr />
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="form-group mb-4">
              <label>Username</label>
              <input 
                type="text" 
                className="form-control" 
                value={username} 
                onChange={handleUsernameChange} // Binding username state
              />
            </div>
            <div className="form-group mb-4">
              <label>Password</label>
              <input 
                type="password" 
                className="form-control" 
                value={password} 
                onChange={handlePasswordChange} // Binding password state
              />
            </div>
          </div>
          <button className="btn btn-primary w-100" onClick={doLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}
