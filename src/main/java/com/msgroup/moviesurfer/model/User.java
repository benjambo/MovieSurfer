package com.msgroup.moviesurfer.model;
import javax.persistence.Entity;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import javax.validation.constraints.Size;


@Entity
public class User{
    // generate automatically an id for every User object
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // @NotNull constraint on the database level, it will not work for validation on the server side
    //@NorBlank constraint on the server level
   @NotBlank(message = "first name is required")
    private String firstName;

    @NotBlank(message = "Last name is required")
    private String lastName;

    @Email(message = "input valid email")// constraint on the server level
    @NotBlank(message = "email is required") // constraint on the server level
    @Column(unique = true) // constraint on the database level
    private String email;

    @NotBlank(message = "password is required")
    @Size(min = 6, message = "password has to be at least 6 characters")// constraint on the server level
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
