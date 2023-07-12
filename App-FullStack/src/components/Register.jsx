import React from 'react'

function Register() {
  return (
    <div className="register">
        <div className="register-header">
            Registration
        </div>

        <form method='POST' className='FormRegister'>
            <input type="text" name="Rname" placeholder='Enter Your Name Here.' required/>
            <input type="text" name="Rusername" placeholder='Preferred Username'  required/>
            <input type="password" name="Rpassword" placeholder='Password Here' required/>
            <input type="password" name="Rrepassword" placeholder='Retype your Password Here' required/>
           
            <button type="submit">Register</button>
            
        </form>
    </div>
  )
}

export default Register