package com.msgroup.moviesurfer.controller;


import com.msgroup.moviesurfer.model.User;
import com.msgroup.moviesurfer.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api")

public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/create-user")
    ResponseEntity<User> createUser(@Valid @RequestBody User user){

        User user1 = userService.saveUser(user);
        return new ResponseEntity<User>(user1, HttpStatus.CREATED);

    }

    /*
    public String sayHello(){
    //ResponseEntity<User>
        return "Welcome to MovieSurfer Application";
    }
    */








}
