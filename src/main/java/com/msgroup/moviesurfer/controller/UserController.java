package com.msgroup.moviesurfer.controller;


import com.msgroup.moviesurfer.model.LoginRequest;
import com.msgroup.moviesurfer.model.User;

import com.msgroup.moviesurfer.security.JwtLoginSuccessResponse;
import com.msgroup.moviesurfer.security.JwtProvider;

import com.msgroup.moviesurfer.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.msgroup.moviesurfer.services.CustomUserDetailsService.userRole;
/**
 * UserController handles the http requests for user entities
 */
//@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    JwtProvider jwtProvider;

    @Autowired
    private AuthenticationManager authenticationManager;

    // Map<k,v> Key value pair
    Map<String, String> errorMap = new HashMap<>();

    // @Valid: to pass a valid request body of type User ,so if an empty request body passed,
    // it will response with a status of 404.
    // BindingResult analyzes the User object and checks weather or not there are errors for example: blank firstName.
    // BindingResult will return a list of the detected errors List<FieldError>.
    // ResponseEntity<?>: question mark is for a generic type.
    @PostMapping(value = "/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user,BindingResult result){


            // Validation for @NotBlank, @Size and @Email annotations
            if(result.hasErrors()){
                for(FieldError error: result.getFieldErrors()){
                    // key:field , value:default message
                    // add the key value pair error to the errorMap object
                    errorMap.put(error.getField(), error.getDefaultMessage());
                }
                return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
               // return new ResponseEntity<List<FieldError>>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
            }else {
                User newUser = userService.saveUser(user);
                if(user.getId()== null) {
                    System.out.println("New USER Registered Successfully!");
                    System.out.println(newUser);
                    return new ResponseEntity<String>("Account Created Successfully!", HttpStatus.OK);
                }else{
                    return new ResponseEntity<String>("Account Modified Successfully!", HttpStatus.OK);
                }
            }

    }

    /**
     * To get all users
     * @return list of users
     */
    @GetMapping(value ="/users")
    public @ResponseBody List<User> getUsers(){
        return userService.getUsers();

    }


    /**
     * To get a user by id
     * @param id type(Long)
     * @return user object
     */
    @GetMapping(value ="/users/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id){
        User user = userService.getUserById(id);
        if(user == null) return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    /**
     * To authenticate user's log in request
     * @param loginrequest consists of user's email and password
     * @param result list of the detected errors
     * @return login success response object contains TOKEN
     */

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginrequest, BindingResult result){

        // Validation for @NotBlank, @Size and @Email annotations
        if(result.hasErrors()){
            for(FieldError error: result.getFieldErrors()){
                // key:field , value:default message
                // add the key value pair error to the errorMap object
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
            //return new ResponseEntity<List<FieldError>>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
        }else {

            System.out.println("User " + loginrequest.getEmail() + " asks for authentication");
            // this is the authentication that passes to the
            // jwtProvider's generateToken(Authentication authentication) method
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginrequest.getEmail(), loginrequest.getPassword()
                    )
            );
            System.out.println("The User " + loginrequest.getEmail() + " authenticated successfully");
            SecurityContextHolder.getContext().setAuthentication(authentication);
            // Generate TOKEN
            String jwt = jwtProvider.generateToken(authentication);
            // String jwt = JwtProvider.TOKEN_PREFIX + jwtProvider.generateToken(authentication);
            System.out.println("Jwt generated successfully");
            //return new ResponseEntity<String>(jwt, HttpStatus.OK);
           return ResponseEntity.ok(new JwtLoginSuccessResponse(true, jwt));




        }

    }


    /**
     * To authenticate admin's log in request
     * @param loginrequest consists of admin's email and password
     * @param result list of the detected errors
     * @return login success response object contains TOKEN
     */
    @PostMapping("/admin/login")
    public ResponseEntity<?> authenticateAdmin(@Valid @RequestBody LoginRequest loginrequest, BindingResult result){

        System.out.println("######### userRole: " + userRole);

        // Validation for @NotBlank, @Size and @Email annotations
        if(result.hasErrors()){
            for(FieldError error: result.getFieldErrors()){
                // key:field , value:default message
                // add the key value pair error to the errorMap object
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
            //return new ResponseEntity<List<FieldError>>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
        }else {
                System.out.println("Admin " + loginrequest.getEmail() + " asks for authentication");
                // this is the authentication that passes to the
                // jwtProvider's generateToken(Authentication authentication) method
                Authentication authentication = authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                loginrequest.getEmail(), loginrequest.getPassword()
                        )
                );
            if(!userRole.equals("ADMIN")){
               // throw new UsernameNotFoundException("Admin" + loginrequest.getEmail() +" not found");
                System.out.println("Admin not found");
                return new ResponseEntity<String>("Admin " + loginrequest.getEmail() + " not found", HttpStatus.UNAUTHORIZED);

            };
                System.out.println("The Admin " + loginrequest.getEmail() + " authenticated successfully");
                SecurityContextHolder.getContext().setAuthentication(authentication);
                // Generate TOKEN
                String jwt = jwtProvider.generateToken(authentication);
                // String jwt = JwtProvider.TOKEN_PREFIX + jwtProvider.generateToken(authentication);
                System.out.println("Jwt generated successfully");
                //return new ResponseEntity<String>(jwt, HttpStatus.OK);
                return ResponseEntity.ok(new JwtLoginSuccessResponse(true, jwt));
            }

    }


}
