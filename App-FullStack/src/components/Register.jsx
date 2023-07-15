import React, { useState } from 'react'

function Register(props) {
  const [Email, setEmail] = useState('')
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [RePassword, setRePassword] = useState('')
  const [Response, setResponse] = useState('')


  const handleRequest = (e)=>{
    e.preventDefault()
   if(Password === RePassword){
      
      fetch('/api/request/register', {
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify({
          Email,
          Username,
          Password,
        })
      })
      .then((res)=> res.json())
      .then((data)=>{
        setResponse(data.message)
        setEmail('')
        setUsername('')
        setPassword('')
        setRePassword('')
      })
   }else{
    setResponse('Password dont Match!')
   }
  }


  return (
    <div className="register">
        <div className="register-header">
            Registration
        </div>

        <form method='POST' className='FormRegister' onSubmit={handleRequest}>
            <input type="email" name="Remail" placeholder='Enter Your Email Here.' value={Email} onChange={e=>setEmail(e.target.value)} required/>

            <input 
              type="text" 
              name="Rusername" 
              placeholder='Preferred Username'
              value={Username}
              onChange={e=>setUsername(e.target.value)}  
              required
            />

            <input 
              type="password" 
              name="Rpassword" 
              placeholder='Password Here'
              value={Password} 
              onChange={e=>setPassword(e.target.value)}
              minLength={8} 
              required
            />

            <input 
              type="password" 
              name="Rrepassword" 
              placeholder='Retype your Password Here'
              value={RePassword}
              onChange={e=>setRePassword(e.target.value)}
              minLength={8} 
              required
            />
           
            <button type="submit">Register</button>

            <a href="#" onClick={props.handleShow}>Click to Login</a>

            {Response}
        </form>
    </div>
  )
}

export default Register