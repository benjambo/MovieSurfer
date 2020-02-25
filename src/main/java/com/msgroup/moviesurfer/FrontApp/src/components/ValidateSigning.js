
export default function ValidateForm(sign) {
  let signError = {};

  if (!sign.email1) {
    signError.email1 = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(sign.email1)) {
    signError.email1 = "Email address is invalid";
  }

  if (!sign.password1) {
    signError.password1 = "Password is required";
  } else if (sign.password1.length < 5) {
    signError.password1 = "Password needs to be more than 5 characters";
  }

  return signError;
}

