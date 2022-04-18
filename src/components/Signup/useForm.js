import {useState, useEffect } from 'react'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values, 
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true)
    console.log('submitted')
  }
  useEffect(
    () => {
      console.log(Object.keys(errors).length)

      if(Object.keys(errors).length === 0 && isSubmitting){
        callback();
      }
    }, 
    [callback, errors, isSubmitting]
    );
    console.log(callback)
  return { handleChange, values, handleSubmit, errors };
}

export default useForm