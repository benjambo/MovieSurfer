package com.msgroup.moviesurfer.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.persistence.EntityNotFoundException;
import javax.persistence.TransactionRequiredException;


/**
 * Global exception handling for controllers / services.
 * When the controller/service throws the exception which is wired up in this class, it
 * will come here to be handled
 */
@ControllerAdvice
@RestController
public class GlobalResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    /**
     * TO handle unique email exceptions
     * @param ex UniqueEmailException
     * @return response entity
     */
    @ExceptionHandler
    public final ResponseEntity<Object> handleUniqueEmailException(UniqueEmailException ex){

        return new ResponseEntity<>(ex.getMessage(), HttpStatus.ALREADY_REPORTED);

    }

    /**
     * To handle entity not found exceptions
     * @param ex EntityNotFoundException
     * @return response entity
     */
    // EntityNotFoundException is a spring built-in exception
    @ExceptionHandler
    public final ResponseEntity<Object> HandleEntityNotFoundException(EntityNotFoundException ex){

        //return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>("Movie not found!", HttpStatus.BAD_REQUEST);

    }

    /**
     * To handle transaction required exceptions
     * @param ex TransactionRequiredException
     * @return response entity
     */
    @ExceptionHandler
    public final ResponseEntity<Object> HandleTransactionRequiredException(TransactionRequiredException ex){

        //return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>("Transaction Required Exception thrown", HttpStatus.BAD_REQUEST);

    }



}