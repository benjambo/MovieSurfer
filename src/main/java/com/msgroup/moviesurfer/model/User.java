package com.msgroup.moviesurfer.model;

import javax.persistence.Entity;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import javax.validation.constraints.Size;

@Entity
public class User {
    // generate automatically an id for every User object
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // @NotNull does not work for an empty firstName, so we have to use @NotBlank
   @NotBlank(message = "first name is required")
    private String firstName;

    @NotBlank(message = "Last name is required")
    private String lastName;

    @Email(message = "input valid email")
    @NotBlank(message = "email is required")
    @Column(unique = true)
    private String email;

    @NotBlank
    @Size(min = 6, message = "password has to be at least 6 characters")
    private String password;


    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

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
