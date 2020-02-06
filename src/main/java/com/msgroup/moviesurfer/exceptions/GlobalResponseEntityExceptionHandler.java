package com.msgroup.moviesurfer.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

// Global exception handling for controllers / services.
// When the controller/service throws the exception which is wired up in this class, it
// will come here to be handled
@ControllerAdvice
@RestController
public class GlobalResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {


    @ExceptionHandler
    public final ResponseEntity<Object> handleUniqueEmailException(UniqueEmailException ex){

        return new ResponseEntity<>(ex.getMessage(), HttpStatus.ALREADY_REPORTED);


    }

}