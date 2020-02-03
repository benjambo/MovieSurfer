package com.msgroup.moviesurfer.controller;


import com.msgroup.moviesurfer.model.User;
import com.msgroup.moviesurfer.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

//@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/users")
public class UserController {



    @Autowired
    private UserService userService;

    @PostMapping("/register")    // we have to pass a valid request body of type User.
    // BindingResult analyzes the User object and checks weather or not there are errors
    @ResponseBody ResponseEntity<?> registerUser(@Valid @RequestBody User user){



              User newUser = userService.saveUser(user);
             newUser.setFirstName(user.getFirstName());
             newUser.setLastName(user.getLastName());
             newUser.setEmail(user.getEmail());
             newUser.setPassword(user.getPassword());
            return new ResponseEntity<User>(newUser, HttpStatus.CREATED);


    }













}
