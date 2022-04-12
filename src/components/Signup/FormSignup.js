import React from 'react'
import useForm from './useForm';
import validate from './validateInfo';

const FormSignup = ({submitForm}) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);
  // const inp = document.getElementByTagName('input');

  return (
    <div className="form-content-right">
      <div className='free-trial'>
        <div className='' >CLAIM YOUR FREE TRIAL</div>
      </div>
      <form name='form' className="signup" onSubmit={(e) => handleSubmit(e)} >
        <div className='signup__controls'>
          <div className='signup__control'>
            <input name='firstName' placeholder='First Name' type='text' value={values.firstName} onChange={handleChange} />
            {/* {inp.firstName.style.backgroundColor = 'red'} */}
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>
          <div className='signup__control'>
            <input name='lastName' placeholder='Last Name' type='text' value={values.lastName} onChange={handleChange} />
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>
          <div className='signup__control'>
            <input name='email' placeholder='Email Address' type='email' value={values.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className='signup__control'>
            <input name='password' placeholder='Password' type='password' value={values.password} onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className='signup__actions'>
            <button type='submit' >CLAIM YOUR FREE TRIAL</button>
          </div>
          <p>
            By clicking the button you are agreeing to our <span>Terms and Services</span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default FormSignup