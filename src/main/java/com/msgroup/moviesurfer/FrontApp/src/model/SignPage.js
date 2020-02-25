import React, {Component} from 'react';
import styled from "styled-components";
import axios from "axios";
import {Alert} from "reactstrap";


class SignPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {
        emailSig: '',
        passwordSig: ''
      },
      registerForm:{
        firstName:'',
        lastName:'',
        emailReg:'',
        passwordReg:''
      },
      loginErrors:{},
      registerErrors:{},
      serverMessageReg:'',
      serverMessageSig:'',
      visibleSuccessReg:false,
      visibleErrorReg:false,
      visibleSuccessSig:false,
      visibleErrorSig:false
    };

    this.onChangeSignIn = this.onChangeSignIn.bind(this);
    this.onSubmitSignIn = this.onSubmitSignIn.bind(this);

    this.onChangeRegister= this.onChangeRegister.bind(this);
    this.onSubmitRegister= this.onSubmitRegister.bind(this);



  }


  toggleSuccessReg(){
    this.setState({
      visibleSuccessReg: !this.state.visibleSuccessReg,
    })
  }
  toggleErrorReg(){
    this.setState({
      visibleErrorReg: !this.state.visibleErrorReg,
    })
  }
  toggleSuccessSig(){
    this.setState({
      visibleSuccessSig: !this.state.visibleSuccessSig
    })
  }
  toggleErrorSig(){
    this.setState({
      visibleErrorSig: !this.state.visibleErrorSig
    })
  }


  onChangeSignIn(e) {
    //this.setState({ [e.target.name]: e.target.value });

    let loginForm = this.state.loginForm;
    loginForm[e.target.name] = e.target.value;
    this.setState({loginForm});

  }
  onChangeRegister(e) {
    //this.setState({ [e.target.name]: e.target.value });

    let registerForm = this.state.registerForm;
    registerForm[e.target.name] = e.target.value;
    this.setState({registerForm});

  }



  validateSignInForm() {

    let loginForm = this.state.loginForm ;
    let loginErrors = {};
    let LoginFormIsValid = true;


    if (!loginForm["emailSig"]) {
      LoginFormIsValid = false;
      loginErrors["emailSig"] = "*Please enter your email.";
    }

    if (typeof loginForm["emailSig"] !== "undefined") {
      //regular expression for email validation
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(loginForm["emailSig"])) {
        LoginFormIsValid = false;
        loginErrors["emailSig"] = "Email address is required";
      }
    }

    if (!loginForm["passwordSig"]) {
      LoginFormIsValid = false;
      loginErrors["passwordSig"] = "Password is required";
    }

    if (typeof loginForm["passwordSig"] === "undefined") {


        LoginFormIsValid = false;
        loginErrors["passwordSig"] = "Password is required";

    }

    this.setState({
      loginErrors: loginErrors
    });
    return LoginFormIsValid;



  }





  validateRegisterForm(){

    let registerForm = this.state.registerForm;
    let registerErrors = {};
    let registerFormIsValid= true;

    if (!registerForm["firstName"]) {
      registerFormIsValid = false;
      registerErrors["firstName"] = "First name is required";
    }

    if (typeof registerForm["firstName"] !== "undefined") {
      if (!registerForm["firstName"].match(/^[a-zA-Z ]*$/)) {
        registerFormIsValid = false;
        registerErrors["firstName"] = "Enter alphabet characters only.";
      }
    }

    if (!registerForm["lastName"]) {
      registerFormIsValid = false;
      registerErrors["lastName"] = "Last name is required";
    }

    if (typeof registerForm["lastName"] !== "undefined") {
      if (!registerForm["lastName"].match(/^[a-zA-Z ]*$/)) {
        registerFormIsValid = false;
        registerErrors["lastName"] = "Enter alphabet characters only";
      }
    }


    if (!registerForm["emailReg"]) {
      registerFormIsValid = false;
      registerErrors["emailReg"] = "Email address is required";
    }

    if (typeof registerForm["emailReg"] !== "undefined") {
      //regular expression for email validation
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(registerForm["emailReg"])) {
        registerFormIsValid = false;
        registerErrors["emailReg"] = "Enter valid email address";
      }
    }

    if (!registerForm["passwordReg"]) {
      registerFormIsValid = false;
      registerErrors["passwordReg"] = "Password is required";
    }

    if (typeof registerForm["passwordReg"] !== "undefined") {
      // password: uppercase, lowercase and number min 6 characters
      // if (!form["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
      if (!registerForm["passwordReg"].match(/(?=^.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)) {
        registerFormIsValid = false;
        registerErrors["passwordReg"] = "Password must contain at least one number, one uppercase and 6 characters";
      }
    }

    this.setState({
      registerErrors: registerErrors
    });
    return registerFormIsValid;


  }


  onSubmitSignIn(e) {
    // to prevent submitting the form during user input
    e.preventDefault();

    if(this.validateSignInForm()) {

      let loginRequest = {
        email: this.state.loginForm.emailSig,
        password: this.state.loginForm.passwordSig,
      };

      console.log("Submitted Singing Successfully");
      axios
          .post("http://localhost:8080/api/login", loginRequest)
          .then(res => {
            console.log("###Loging In Response ", res);

            if (res.status === 200) {

              this.setState({serverMessageSig: "Logged in Successfully!"});
              this.setState({visibleErrorSig: false});
              // this.setState({visibleSuccessSig:true});
              window.location = "/";
            }
          })
          .catch(err => {
            console.log("Sing In Error: ", err);
            this.setState({serverMessageSig: "Invalid Email Or Password!"});
            this.setState({visibleSuccessSig: false});
            this.setState({visibleErrorSig: true});
          });
    }

  }

  onSubmitRegister(e) {
    // to prevent submitting the form during user input
    e.preventDefault();

    if(this.validateRegisterForm()) {

      let registerRequest = {
        firstName: this.state.registerForm.firstName,
        lastName: this.state.registerForm.lastName,
        email: this.state.registerForm.emailReg,
        password: this.state.registerForm.passwordReg,
      };

      console.log("Submitted Registration Successfully");
      axios
          .post("http://localhost:8080/api/register", registerRequest)
          .then(res => {
            console.log(res);
            if (res.status === 200) {
              this.setState({
                registerForm:{
                  firstName:'',
                  lastName:'',
                  emailReg:'',
                  passwordReg:''
                },
                serverMessageReg:res.data,
                visibleSuccessReg: true,
                visibleErrorReg: false});
            } else {
              this.setState({
                serverMessageReg: res.data,
                visibleSuccessReg: false,
                visibleErrorReg: true});
            }
          })
          .catch(err => {
            console.log(err);
          });
    }

  }

  render(){

    return (
        <Styles>
          <div className="wrapper">
            <div className="first-form-wrapper">
              <h3>Sign In</h3>
              <form onSubmit={this.onSubmitSignIn}>
                <div className="email">
                  <label htmlFor="emailSig">Email</label>
                  <input
                      className={this.state.loginErrors.emailSig && "error"}
                      type="text"
                      placeholder="Email"
                      name="emailSig"
                      value={this.state.loginForm.emailSig}
                      onChange={this.onChangeSignIn}

                  />
                  <span className="errorMessage">{this.state.loginErrors.emailSig}</span>
                </div>

                <div className="password">
                  <label htmlFor="passwordSig">Password</label>
                  <input
                      className={this.state.loginErrors.passwordSig && "error"}
                      type="password"
                      placeholder="Password"
                      name="passwordSig"
                      value={this.state.loginForm.passwordSig}
                      onChange={this.onChangeSignIn}

                  />
                  <span className="errorMessage">{this.state.loginErrors.passwordSig}</span>
                </div>

                <div className="createAccount">
                  <button type="submit">Log In</button>
                </div>
              </form>
              <div>
                <Alert isOpen={this.state.visibleSuccessSig} toggle={this.toggleSuccessSig.bind(this)} className="mt-3" color="success">
                  {this.state.serverMessageSig}
                </Alert>
                <Alert isOpen={this.state.visibleErrorSig} toggle={this.toggleErrorSig.bind(this)} className="mt-3" color="danger">
                  {this.state.serverMessageSig}
                </Alert>

              </div>

            </div>

            <div className="second-form-wrapper">
              <h3>Create Account</h3>
              <form onSubmit={this.onSubmitRegister}>
                <div className="firstName">
                  <label htmlFor="firstName">First Name</label>
                  <input
                      className={this.state.registerErrors.firstName && "error"}
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={this.state.registerForm.firstName}
                      onChange={this.onChangeRegister}
                  />
                  <span className="errorMessage">{this.state.registerErrors.firstName}</span>
                </div>


                <div className="lastName">
                  <label htmlFor="email">Last Name</label>
                  <input
                      className={this.state.registerErrors.lastName && "error"}
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={this.state.registerForm.lastName}
                      onChange={this.onChangeRegister}
                  />
                  <span className="errorMessage mr-2">{this.state.registerErrors.lastName}</span>
                </div>


                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                      className={this.state.registerErrors.emailReg && "error"}
                      type="text"
                      placeholder="Email"
                      name="emailReg"
                      value={this.state.registerForm.emailReg}
                      onChange={this.onChangeRegister}

                  />
                  <span className="errorMessage">{this.state.registerErrors.emailReg}</span>
                </div>



                <div className="password">
                  <label htmlFor="password">Password</label>
                  <input
                      className={this.state.registerErrors.passwordReg && "error"}
                      type="password"
                      placeholder="Password"
                      name="passwordReg"
                      value={this.state.registerForm.passwordReg}
                      onChange={this.onChangeRegister}
                  />
                  <span className="errorMessage">{this.state.registerErrors.passwordReg}</span>
                </div>


                <div className="createAccount">
                  <button type="submit">Create Account</button>
                </div>
              </form>
              <div>
                <Alert isOpen={this.state.visibleSuccessReg} toggle={this.toggleSuccessReg.bind(this)} className="mt-3" color="success">
                  {this.state.serverMessageReg}
                </Alert>
                <Alert isOpen={this.state.visibleErrorReg} toggle={this.toggleErrorReg.bind(this)} className="mt-3" color="danger">
                  {this.state.serverMessageReg}
                </Alert>

              </div>

            </div>

          </div>
        </Styles>
    );
  }

}

export default SignPage;


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


/*
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

export const SignPage = (props) => {
  const [regSuccessAlert, setVisible1] = useState(false);
  const [regFailedAlert, setVisible2] = useState(false);
  const [signSuccessAlert, setVisible3] = useState(false);
  const [signFailedAlert, setVisible4] = useState(false);

  const showRegisterSuccess = () => setVisible1(true);
  const hideRegisterSuccess = () => setVisible1(false);
  const showRegisterFailed = () => setVisible2(true);
  const hideRegisterFailed = () => setVisible2(false);

  const showSignSuccess = () => setVisible3(true);
  const hideSignSuccess = () => setVisible3(false);
  const showSignFailed = () => setVisible4(true);
  const hideSignFailed = () => setVisible4(false);

  // Calls handleChange, handleSubmit functions from Form Class
  // Also calls values sign and register from useState
  const {
    handleChange,
   //handleSubmitRegister,
   // handleSubmitSign,
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
  const loginRequest={
    email:sign.email1,
    password:sign.password1
  };

  function submitSig(e) {
    // to prevent submitting the form during user input
   e.preventDefault();

      console.log("Submitted Singing Successfully");
      axios
          .post("http://localhost:8080/api/login", loginRequest)
          .then(res => {
            console.log("###Loging In Response ", res);

            if (res.status === 200) {
              hideSignFailed();
              //showSignSuccess();
              sign.email = "";
              sign.password = "";
              window.location = "/";
            }
          })
          .catch(err => {
            console.log("Sing In Error: ", err);
            hideSignSuccess();
            showSignFailed();
          });

  }



  function submitReg(e) {
    // to prevent submitting the form during user input
   e.preventDefault();

      console.log("Submitted Registration Successfully");
      axios
          .post("http://localhost:8080/api/register", newUser)
          .then(res => {
            console.log("###registerUserResponse ", res);

            if (res.status === 200) {
              console.log(res);
              //window.location = "/";
              hideRegisterFailed();
              showRegisterSuccess();

            } else {
              // window.location = "/signpage";
              hideRegisterSuccess();
              showRegisterFailed();
            }
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
            <form onSubmit={submitSig} noValidate>
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
            <div>
              <Alert className="mt-3" color="success" isOpen={signSuccessAlert} toggle={showSignSuccess} >
                <p>Signed In Successfully</p>
              </Alert>
              <Alert className="mt-3" color="danger" isOpen={signFailedAlert} toggle={showSignFailed} >
                <p>Invalid Email Or Password</p>
              </Alert>
            </div>
          </div>
          <div className="second-form-wrapper">
            <h3>Create Account</h3>
            <form onSubmit={submitReg} noValidate>
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
            <div>
              <Alert className="mt-3" color="success" isOpen={regSuccessAlert} toggle={showRegisterSuccess} >
                <p>Registered Successfully!</p>
              </Alert>
              <Alert className="mt-3" color="danger" isOpen={regFailedAlert} toggle={showRegisterFailed}  >
                <p>Email Is Already Registered!</p>
              </Alert>
            </div>
          </div>
        </div>
      </Styles>
  );
};


 */