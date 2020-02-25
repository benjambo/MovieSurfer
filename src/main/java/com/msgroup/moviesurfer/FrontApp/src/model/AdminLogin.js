import React, {Component} from 'react';
import styled from "styled-components";
import axios from "axios";
import {Alert} from "reactstrap";


class AdminLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginForm: {
                email: '',
                password: ''
            },
            serverMessage:'',
            visibleSuccess:false,
            visibleError:false,
            loginErrors:{}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    toggleSuccess(){
        this.setState({
            visibleSuccess: !this.state.visibleSuccess,
        })
    }
    toggleError(){
        this.setState({
            visibleError: !this.state.visibleError
        })
    }



    onChange(e) {
        //this.setState({ [e.target.name]: e.target.value });

        let loginForm = this.state.loginForm;
        loginForm[e.target.name] = e.target.value;
        this.setState({loginForm});

    }

    validateForm(){

        let loginForm = this.state.loginForm;
        let loginErrors = {};
        let formIsValid= true;


        if (!loginForm["email"]) {
            formIsValid = false;
            loginErrors["email"] = "*Please enter your email.";
        }

        if (typeof loginForm["email"] !== "undefined") {
            //regular expression for email validation
            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(loginForm["email"])) {
                formIsValid = false;
                loginErrors["email"] = "*Please enter valid email.";
            }
        }

        if (!loginForm["password"]) {
            formIsValid = false;
            loginErrors["password"] = "Password is required";
        }

        if (typeof loginForm["password"] === "undefined") {

                formIsValid = false;
                loginErrors["password"] = "Password is required";

        }

        this.setState({
            loginErrors: loginErrors
        });
        return formIsValid;


    }


    onSubmit(e) {
        // to prevent submitting the form during user input
      e.preventDefault();
      if(this.validateForm()) {

          const loginRequest = {
              email: this.state.loginForm.email,
              password: this.state.loginForm.password,
          };

          console.log("Submitted Singing Successfully");
          axios
              .post("http://localhost:8080/api/admin/login", loginRequest)
              .then(res => {
                  console.log("###Loging In Response ", res);

                  if (res.status === 200) {
                      this.setState({serverMessage: "Logged in Successfully!"});
                      this.setState({visibleError: false});
                      // this.setState({visibleSuccess:true});
                      window.location = "/admin/addmovie";
                  }
              })
              .catch(err => {
                  console.log("Sing In Error: ", err);
                  this.setState({serverMessage: "Invalid Email Or Password!"});
                  this.setState({visibleSuccess: false});
                  this.setState({visibleError: true});
              });
      }

    }
    render(){

    return (
        <Styles>
            <div className="wrapper">
                <div className="first-form-wrapper">
                    <h3>Admin Log In</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input

                                type="text"
                                placeholder="Email"
                                name="email"
                                value={this.state.loginForm.email}
                                onChange={this.onChange}

                            />

                        </div>

                        <div className="errorMsg">{this.state.loginErrors.email}</div>

                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input

                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.loginForm.password}
                                onChange={this.onChange}

                            />

                        </div>

                        <div className="errorMsg">{this.state.loginErrors.password}</div>

                        <div className="createAccount">
                            <button type="submit">Log In</button>
                        </div>
                    </form>
                    <div>
                        <Alert isOpen={this.state.visibleSuccess} toggle={this.toggleSuccess.bind(this)} className="mt-3" color="success">
                            {this.state.serverMessage}
                        </Alert>
                        <Alert isOpen={this.state.visibleError} toggle={this.toggleError.bind(this)} className="mt-3" color="danger">
                            {this.state.serverMessage}
                        </Alert>

                    </div>

            </div>

            </div>
        </Styles>
    );
}

}

export default AdminLogin;

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
  .errorMsg {
  color: #cc0000;
  margin-bottom: 12px;
}



`;