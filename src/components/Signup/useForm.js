import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const inputBlur = (type) => {
    setEnteredNameTouched(true);

    console.log(values.firstName);
  };
  const nameInputIsValid = values.firstName && enteredNameTouched;

  const lastIsValid = values.lastName && enteredNameTouched;
  console.log(enteredNameTouched);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    console.log("submitted");
  };
  useEffect(() => {
    console.log(Object.keys(errors).length);

    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, errors, isSubmitting, enteredNameTouched]);
  console.log(callback);
  return {
    handleChange,
    values,
    handleSubmit,
    errors,
    inputBlur,
    nameInputIsValid,
    lastIsValid,
  };
};

export default useForm;
