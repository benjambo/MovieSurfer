package com.msgroup.moviesurfer.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(HttpStatus.ALREADY_REPORTED)
public class UniqueEmailException extends RuntimeException {
    public UniqueEmailException(String message) {
        super(message);
    }
}
