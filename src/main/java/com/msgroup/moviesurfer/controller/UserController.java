package com.msgroup.moviesurfer.controller;


import com.msgroup.moviesurfer.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController

public class UserController {

   // @PostMapping("")
   @RequestMapping(value = "/api/users")
    public String sayHello(){
    //ResponseEntity<User>
        return "Welcome to MovieSurfer Application";
    }







}
