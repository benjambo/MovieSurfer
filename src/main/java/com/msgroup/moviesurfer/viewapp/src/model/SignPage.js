import React from "react";
import Form from "../components/From";
import validateSig from "../components/ValidateSigning";
import validateReg from "../components/ValidateRegistration";
import styled from "styled-components";
import axios from "axios";

const Styles = styled.div`
  * {
    background-color: white;
  }
  .wrapper {
    height: 78.2vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #4b0e1d;
  }
`;

export const SignPage = () => {
  // Calls handleChange, handleSubmit functions from Form Class
  // Also calls values sign and register from useState
  const {
    handleChange,
    handleSubmitRegister,
    handleSubmitSign,
    sign,
    register,
    signError,
    registerError
  } = Form(submitSig, submitReg, validateSig, validateReg);

  const newUser = {
    firstName: register.firstName,
    lastName: register.lastName,
    email: register.email2,
    password: register.password2
  };

  function submitSig() {
    console.log("Submitted Singing Successfully");
  }

  function submitReg() {
    console.log("Submitted Registration Successfully");
    axios
      .post("http://localhost:8080/api/users/register", newUser)
      .then(res => {
        console.log("post register response ", res);
        if (res.status === 201) {
          window.location = "/";
        } else {
          window.location = "/signpage";
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <Styles>
      <div className="wrapper">
        <div className="first-form-wrapper">
          <h3>Sign In</h3>
          <form onSubmit={handleSubmitSign} noValidate>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={`${signError.email1 && "error"}`}
                type="email"
                placeholder="Email"
                name="email1"
                value={sign.email1}
                onChange={handleChange}
                formNoValidate
              />
              {signError.email1 && (
                <span className="errorMessage">{signError.email1}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={`${signError.password1 && "error"}`}
                type="password"
                placeholder="Password"
                name="password1"
                value={sign.password1}
                onChange={handleChange}
                formNoValidate
              />
              {signError.password1 && (
                <span className="errorMessage">{signError.password1}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Sign In</button>
            </div>
          </form>
        </div>
        <div className="second-form-wrapper">
          <h3>Create Account</h3>
          <form onSubmit={handleSubmitRegister} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={`${registerError.firstName && "error"}`}
                type="text"
                placeholder="First Name"
                name="firstName"
                value={register.firstName}
                onChange={handleChange}
                formNoValidate
              />
              {registerError.firstName && (
                <span className="errorMessage">{registerError.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={`${registerError.lastName && "error"}`}
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={register.lastName}
                onChange={handleChange}
                formNoValidate
              />
              {registerError.lastName && (
                <span className="errorMessage">{registerError.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={`${registerError.email2 && "error"}`}
                type="email"
                placeholder="Email"
                name="email2"
                value={register.email2}
                onChange={handleChange}
                formNoValidate
              />
              {registerError.email2 && (
                <span className="errorMessage">{registerError.email2}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={`${registerError.password2 && "error"}`}
                type="password"
                placeholder="Password"
                name="password2"
                value={register.password2}
                onChange={handleChange}
                formNoValidate
              />
              {registerError.password2 && (
                <span className="errorMessage">{registerError.password2}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </Styles>
  );
};
