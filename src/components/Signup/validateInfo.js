export default function validateInfo(values, type) {
  let errors = {};

  if (type === "firstName" && !values.firstName.trim()) {
    errors.firstName = "First Name Required";
  }

  if (type === "lastName" && !values.lastName.trim()) {
    errors.lastName = "Last Name Required";
  }

  if (type === "email" && !values.email) {
    errors.email = "Email Address Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email Address is invalid";
  }

  if (type === "password" && !values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 6) {
    errors.password = "Password need to be 6 characters or more";
  }

  // if(!values.password2){
  //   errors.password2 = "Password is required";
  // } else if (values.password2 !== values.password){
  //   errors.password2 = "Password do not match";
  // }
  return errors;
}
