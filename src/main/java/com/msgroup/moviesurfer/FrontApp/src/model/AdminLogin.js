import React, { useState } from 'react';
import { Alert } from 'reactstrap';
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

export const AdminLogin = (props) => {

    const [signSuccessAlert, setVisible3] = useState(false);
    const [signFailedAlert, setVisible4] = useState(false);

    const showSignSuccess = () => setVisible3(true);
    const hideSignSuccess = () => setVisible3(false);
    const showSignFailed = () => setVisible4(true);
    const hideSignFailed = () => setVisible4(false);

    // Calls handleChange, handleSubmit functions from Form Class
    // Also calls values sign and register from useState
    const {
        handleChange,
        // handleSubmitRegister,
        //handleSubmitSign,
        sign,
        signError,
    } = Form(submitSig, validateSig, validateReg);


    const loginRequest ={
        email:sign.email1,
        password:sign.password1
    };

    function submitSig(e) {
        // to prevent submitting the form during user input
        e.preventDefault();

        console.log("Submitted Singing Successfully");
        axios
            .post("http://localhost:8080/api/admin/login", loginRequest)
            .then(res => {
                console.log("###Loging In Response ", res);

                if (res.status === 200) {
                    hideSignFailed();
                    //showSignSuccess();
                    sign.email="";
                    sign.password="";
                    window.location = "/admin/addmovie";
                }
            })
            .catch(err => {
                console.log("Sing In Error: ", err);
                hideSignSuccess();
                showSignFailed();
            });
    }
    return (
        <Styles>
            <div className="wrapper">
                <div className="first-form-wrapper">
                    <h3>Log In</h3>
                    <form onSubmit={submitSig} noValidate>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                className={`${signError.email1 && "error"}`}
                                type="text"
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
                            <button type="submit">Log In</button>
                        </div>
                    </form>
                    <div>
                        <Alert className="mt-3" color="success" isOpen={signSuccessAlert} toggle={showSignSuccess} >
                            <p>Signed In Successfully</p>
                        </Alert>
                        <Alert className="mt-3" color="danger" isOpen={signFailedAlert} toggle={showSignFailed} >
                            <p>Invalid Email Or Password</p>
                        </Alert>
                    </div>
                </div>
            </div>
        </Styles>
    );
};