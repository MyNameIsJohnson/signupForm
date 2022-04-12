import React, {useState} from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess';
import Header from '../Header/Header';
import './Form.css';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm(){
    setIsSubmitted(true);
  }

  return (
    <>
      {!isSubmitted ? (
        <>
          <Header />
          <FormSignup submitForm={submitForm} />
        </>
        ) : (
        <FormSuccess />
      )}
    </>
  )
}

export default Form