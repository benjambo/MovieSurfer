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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/users")
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
                // Map<K,V> Key value pair
                Map<String, String> errorMap = new HashMap<>();
                for(FieldError error: result.getFieldErrors()){
                    // key:field , value:default message
                    // add/put the key value pair error to the errorMap object
                    errorMap.put(error.getField(), error.getDefaultMessage());
                }
                return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
                //return new ResponseEntity<List<FieldError>>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
            }else {
                User newUser = userService.saveUser(user);
                return new ResponseEntity<String>("Registered Successfully!", HttpStatus.CREATED);
            }

    }


    @GetMapping(value ="/register")
    public ResponseEntity<String> responseToGetRegister(){

        return new ResponseEntity<String>("You have to use POST METHOD with register endpoint!", HttpStatus.BAD_REQUEST);

    }

    // To get all users
    @GetMapping(value ="")
    public @ResponseBody List<User> getUsers(){
        return userService.getUsers();

    }

    // To get a user by id
    @GetMapping(value ="/{id}")
    public @ResponseBody User getUserById(@PathVariable Long id){
        return userService.getUserById(id);

    }


















}
