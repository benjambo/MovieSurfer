export default function ValidateRegistration(register) {
  let registerError = {};

  if (!register.firstName) {
    registerError.firstName = "First name is required";
  } else if (register.firstName.length < 2) {
    registerError.firstName = "First name needs to be more than 1 character";
  }

  if (!register.lastName) {
    registerError.lastName = "Last name is required";
  } else if (register.lastName.length < 2) {
    registerError.lastName = "Last name needs to be more than 1 character";
  }

  if (!register.email2) {
    registerError.email2 = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(register.email2)) {
    registerError.email2 = "Email address is invalid";
  }

  if (!register.password2) {
    registerError.password2 = "Password is required";
  } else if (register.password2.length < 5) {
    registerError.password2 = "Password needs to be more than 5 characters";
  }

  return registerError;
}
