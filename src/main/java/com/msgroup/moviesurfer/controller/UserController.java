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
@RequestMapping(value = "/api/users",method = {RequestMethod.POST, RequestMethod.GET})
public class UserController {



    @Autowired
    private UserService userService;

    // @Valid: to pass a valid request body of type User ,so if an empty request body passed,
    // it will response with a status of 404.
    // BindingResult analyzes the User object and checks weather or not there are errors for example: blank firstName.
    // BindingResult will return a list of the detected errors List<FieldError>.
    // ResponseEntity<?>: question mark is for a generic type.
    @PostMapping(value = "/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user,BindingResult result){

            // Validation for @NotBlank, @Size and @Email annotations
            if(result.hasErrors()){
                return new ResponseEntity<List<FieldError>>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
            }else {
                User newUser = userService.saveUser(user);
                return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
            }

    }

    // To get all users
    @GetMapping(value ="")
    @ResponseBody List<User> getUsers(){
        return userService.getUsers();

    }

    // To get a user by id
    @GetMapping(value ="/{id}")
    @ResponseBody User getUserById(@PathVariable("id") Long id){
        return userService.getUserById(id);

    }


















}
