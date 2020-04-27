package com.msgroup.moviesurfer.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Entity;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import javax.validation.constraints.Size;
import java.util.Collection;

/**
 * User Entity implements UserDetails interface because
 * UserDetailsService's method loadUserByUsername(String userEmail) returns
 * a User object of type UserDetails
 */

@Entity
public class User implements UserDetails {
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

    private String role;

    /**
     * Constructor
     */
    public User() {
        this.role = "USER";
    }

    /**
     * To get User's id
     * @return id type Long
     */
    public Long getId() {
        return id;
    }

    /**
     * To set user's id
     * @param id type Long
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * To get user's first name
     * @return firstName type String
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * To set user's first name
     * @param firstName type String
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * To get user's last name
     * @return lastName type String
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * To set user's last name
     * @param lastName type String
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * To get user's email
     * @return email type String
     */
    public String getEmail() {
        return email;
    }

    /**
     * To set user's email
     * @param email type String
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * To get user's password
     * @return password type String
     */
    public String getPassword() {
        return password;
    }

    /**
     * To set user's password
     * @param password type String
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * To get user's role
     * @return role type String
     */
    public String getRole() {
        return role;
    }

    /**
     * To set user's role
     * @param role type String
     */
    public void setRole(String role) {
        this.role = role;
    }


    //  UserDetails Interface Methods

    /**
     * UserDetails Interface Implementation Method
     * Returns the authorities granted to the user.
     * @return null
     */
    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    /**
     * UserDetails Interface Implementation Method
     * Returns the username used to authenticate the user.
     * @return email as the username type String
     * @JsonIgnore added to prevent saving this field to the database
     */
    @Override
    @JsonIgnore
    public String getUsername() {
        return this.email;
    }

    /**
     * UserDetails Interface Implementation Method
     * Indicates whether the user's account has expired.
     * @return true type boolean
     * @JsonIgnore added to prevent saving this field to the database
     */
    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return true;
    }
    /**
     * UserDetails Interface Implementation Method
     * Indicates whether the user is locked or unlocked.
     * @return true type boolean
     * @JsonIgnore added to prevent saving this field to the database
     */
    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return true;
    }

    /**
     * UserDetails Interface Implementation Method
     * Indicates whether the user's credentials (password) has expired.
     * @return true type boolean
     * @JsonIgnore added to prevent saving this field to the database
     */
    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return true;
    }

    /**
     * UserDetails Interface Implementation Method
     * Indicates whether the user is enabled or disabled.
     * @return true type boolean
     * @JsonIgnore added to prevent saving this field to the database
     */
    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return true;
    }

}
