package com.msgroup.moviesurfer.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class LoginRequest {

    @NotBlank(message = "email cannot be blank")
    @Email
    private String email;
    @NotBlank(message = "password cannot be blank")
    private String password;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
