import React, { useState } from 'react'
import './SignupForm.css'

const SignupForm = (onSignup) => {
  function isRequired(value) {
    return value != null && value.trim().length > 0;
  }
  
  function isSame(value1, value2) {
    return value1 === value2;
  }
  function validate(validations, values) {
    const errors = validations
      .map(validation => validation(values))
      .filter(validation => typeof validation === 'object');
    return {isValid: errors.length === 0, errors: errors.reduce((errors, error) => ({...errors, ...error}), {})};
  }
  function useForm(initialState = {}, validations = [], onSubmit = () => {}) { // Add the 'onSubmit' argument
    const {isValid: initialIsValid, errors: initialErrors} = validate(validations, initialState);
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState(initialErrors);
    const [isValid, setValid] = useState(initialIsValid);
    const [touched, setTouched] = useState({});
    const changeHandler = event => {
      const newValues = {...values, [event.target.name]: event.target.value};
      const {isValid, errors} = validate(validations, newValues);
      setValues(newValues);
      setValid(isValid);
      setErrors(errors);
      setTouched({...touched, [event.target.name]: true});
    }; 
    // Add this
    const submitHandler = event => {
      event.preventDefault();
      onSubmit(values);
    }
    return {values, changeHandler, isValid, errors, touched, submitHandler}; // Add 'submitHandler'
  }

  const initialState = {fname: '', lname: '', email: '', password: '', repeatPassword: ''};
  const validations = [
    ({fname}) => isRequired(fname) || {fname: 'First Name is required'},
    ({lname}) => isRequired(lname) || {lname: 'Last Name is required'},
    ({email}) => isRequired(email) || {email: 'E-mail is required'},
    ({password}) => isRequired(password) || {password: 'Password is required'},
    ({password, repeatPassword}) => isSame(password, repeatPassword) || {repeatPassword: 'Passwords do not match'}
  ];
  const {values, isValid, errors, touched, changeHandler, submitHandler} = useForm(initialState, validations, onSignup);

  return (
    <form name='form' className="signup" onSubmit={submitHandler}> 
      <div className='signup__controls'>
        <div className='signup__control'>
          <input
            type="text"
            name="fname"
            required
            value={values.fname}
            onChange={changeHandler}/>
          {touched.fname && errors.fname && <p className="error">{errors.fname}</p>}
        </div>
      </div>

      <div className='signup__control'>
        <input
          type="text"
          name="lname"
          required
          value={values.lname}
          onChange={changeHandler}/>
        {touched.lname && errors.lname && <p className="error">{errors.lname}</p>}
      </div>

      <div className='signup__control'>
        <input
          type="email"
          name="email"
          required
          value={values.email}
          onChange={changeHandler}/>
        {touched.email && errors.email && <p className="error">{errors.email}</p>} 
      </div> 

      <div className='signup__control'>
        <input
          type="text"
          name="password"
          required
          value={values.password}
          onChange={changeHandler}/>
        {touched.password && errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className='signup__actions'>

        <button
          type='submit'
          disabled={isValid}>
          CLAIM YOUR FREE TRIAL
        </button>
        <p>
          By clicking the button you are agreeing to our <span>Terms and Services</span>
        </p>
      </div>
    </form>
  );
};

export default SignupForm