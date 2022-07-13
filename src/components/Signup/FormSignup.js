import React from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfo";

const FormSignup = ({ submitForm }) => {
  const {
    handleChange,
    handleSubmit,
    inputBlur,
    values,
    errors,
    nameInputIsValid,
    lastIsValid,
  } = useForm(submitForm, validateInfo);

  // const inp = document.getElementByTagName('input');

  const nameInputClasses = nameInputIsValid
    ? "signup__control invalid"
    : "signup__control";

  const lastNameInputClasses = lastIsValid
    ? "signup__control invalid"
    : "signup__control";

  return (
    <div className="form-content-right">
      <div className="free-trial">
        <div className="">CLAIM YOUR FREE TRIAL</div>
      </div>
      <form name="form" className="signup" onSubmit={(e) => handleSubmit(e)}>
        <div className="signup__controls">
          <div className={nameInputClasses}>
            <input
              name="firstName"
              placeholder="First Name"
              type="text"
              value={values.firstName}
              onChange={handleChange}
              onBlur={() => inputBlur("firstName")}
            />
            {/* {inp.firstName.style.backgroundColor = 'red'} */}
            {nameInputIsValid && (
              <p className="error-text">{errors.firstName}</p>
            )}
            {/* {errors.firstName && <p>{errors.firstName}</p>} */}
          </div>
          <div className={lastNameInputClasses}>
            <input
              name="lastName"
              placeholder="Last Name"
              type="text"
              value={values.lastName}
              onChange={handleChange}
              onBlur={() => inputBlur("lastName")}
            />
            {lastIsValid && <p className="error-text">{errors.lastName}</p>}
          </div>
          <div className="signup__control">
            <input
              name="email"
              placeholder="Email Address"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={() => inputBlur("email")}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="signup__control">
            <input
              name="password"
              placeholder="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={() => inputBlur("password")}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="signup__actions">
            <button type="submit">CLAIM YOUR FREE TRIAL</button>
          </div>
          <p>
            By clicking the button you are agreeing to our{" "}
            <span>Terms and Services</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormSignup;
