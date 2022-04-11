import React, { useState } from 'react'
import './SignupForm.css'

const SignupForm = (onSignup) => {
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isValid = email != null && email.trim().length > 0;
  const handleSubmit = (e) => {
    e.preDefault();
    onSignup({fname, lname, email, password})
  }
  
  return (
    <div className="container" >
      <div className='free-trial'>
        <div className='' >CLAIM YOUR FREE TRIAL</div>
      </div>
      <form name='form' className="signup" onSubmit={handleSubmit} >
        <div className='signup__controls'>
          <div className='signup__control'>
            <input placeholder='First Name' type='text' onChange={e => setFirstName(e.target.value)} />
          </div>
          <div className='signup__control'>
            <input placeholder='Last Name' type='text' onChange={e => setLastName(e.target.value)} />
          </div>
          <div className='signup__control'>
            <input placeholder='Email Name' type='text' onChange={e => setEmail(e.target.value)} />
          </div>
          <div className='signup__control'>
            <input placeholder='Password' type='text' onChange={e => setPassword(e.target.value)} />
          </div>
          <div className='signup__actions'>
            <button type='submit' disabled={!isValid}>CLAIM YOUR FREE TRIAL</button>
          </div>
          <p>
            By clicking the button you are agreeing to our <span>Terms and Services</span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default SignupForm