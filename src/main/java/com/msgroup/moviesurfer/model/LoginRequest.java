package com.msgroup.moviesurfer.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

/**
 * Represents Log in request object which has as email and password
 */

public class LoginRequest {

    @NotBlank(message = "email cannot be blank")
    @Email
    private String email;
    @NotBlank(message = "password cannot be blank")
    private String password;


    /**
     * To get the login request's email
     * @return email type String
     */
    public String getEmail() {
        return email;
    }

    /**
     * To set the login request's email
     * @param email type String
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * To get login request's password
     * @return password type String
     */

    public String getPassword() {
        return password;
    }

    /**
     * To set login request's password
     * @param password type String
     */
    public void setPassword(String password) {
        this.password = password;
    }
}
