import React from "react";

export const SignPage = () => {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h3>Create Account</h3>
        <form noValidate>
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className=""
              placeholder="First Name"
              name="firstName"
              formNoValidate
            />
          </div>
          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className=""
              placeholder="Last Name"
              name="lastName"
              formNoValidate
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className=""
              placeholder="Email"
              name="email"
              formNoValidate
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className=""
              placeholder="Password"
              name="password"
              formNoValidate
            />
          </div>
        </form>
      </div>
    </div>
  );
};
