import React, { useState } from 'react';

function Login(props) {
  const [Lusername, setLusername] = useState('');
  const [Lpassword, setLpassword] = useState('');
  const [response, setResponse] = useState('');
 

  const handleRequest = (e) => {
    e.preventDefault();
    fetch('/api/request/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: Lusername,
        password: Lpassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(data.message);
        setLusername('');
        setLpassword('');
        sessionStorage.setItem('current', data.currentUser)
      })
      .catch((error) => {
        console.log(error)
      });
  };
  

  return (
    <div className="login">
      <div className="login-header">Login</div>

      <form method="POST" className="LoginForm" onSubmit={handleRequest}>
        <input
          type="text"
          name="Lusername"
          placeholder="Username"
          value={Lusername}
          onChange={(e) => setLusername(e.target.value)}
          required
        />
        <input
          type="password"
          name="Lpassword"
          placeholder="Password"
          value={Lpassword}
          onChange={(e) => setLpassword(e.target.value)}
          required
        />
        <button type="submit">
          Login
        </button>
      </form>

      {response}
      <a href="#" onClick={props.handleShow}>
        Click to Register
      </a>
    </div>
  );
}

export default Login;
