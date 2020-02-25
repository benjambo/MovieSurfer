import { useState, useEffect } from "react";

const Form = (callbackSig, callbackReg, validateSig, validateReg) => {
  // Hooks to handle validation in forms
  const [sign, setSign] = useState({ email1: "", password1: "" });
  const [signError, setSignError] = useState({ email1: "", password1: "" });
  const [isSubmittingSig, setIsSubmittingSig] = useState(false);
  const [isSubmittingReg, setIsSubmittingReg] = useState(false);

  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email2: "",
    password2: ""
  });
  const [registerError, setRegisterError] = useState({
    firstName: "",
    lastName: "",
    email2: "",
    password2: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    //this.setState({ [event.target.name]: event.target.value });

    //console.log(name);
    //console.log(value);

   setSign({ ...sign, [name]: value });
    setRegister({ ...register, [name]: value });
  };

  const handleSubmitSign = (event) => {
    event.preventDefault();
    // Handling errors for signing
    setSignError(validateSig(sign));
    setIsSubmittingSig(true);
  };

<<<<<<< HEAD:src/main/java/com/msgroup/moviesurfer/FrontApp/src/components/Form.js
  const handleSubmitRegister = event => {
=======
 const handleSubmitRegister = (event) => {
>>>>>>> 423eebb395b009bef4ed42570fa760bfbffed123:src/main/java/com/msgroup/moviesurfer/FrontApp/src/components/Form.js
    event.preventDefault();
    // Handling errors for registration
    setRegisterError(validateReg(register));
    setIsSubmittingReg(true);
  };

  useEffect(() => {
    // Check to see if there are no errors
    if (Object.keys(signError).length === 0 && isSubmittingSig) {
      // Call for the callback of signing
      callbackSig();
    }
    if (Object.keys(registerError).length === 0 && isSubmittingReg) {
      // Call for the callback of registration
      callbackReg();
    }
  }, [
    signError,
    registerError,
    isSubmittingSig,
    isSubmittingReg,
    callbackSig,
    callbackReg
  ]);

  return {
    handleSubmitRegister,
    handleSubmitSign,
    handleChange,
    sign,
    register,
    signError,
    registerError
  };
};

export default Form;
