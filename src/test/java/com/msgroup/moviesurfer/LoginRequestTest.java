package com.msgroup.moviesurfer;
import com.msgroup.moviesurfer.model.LoginRequest;
import org.junit.jupiter.api.Test;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertFalse;

public class LoginRequestTest {

    /**
     * Test for user login validation
     */

    private final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

    @Test
    public void testLoginReq() throws Exception{
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setEmail("sdfs ");
        loginRequest.setPassword(" sdfsd");

        Set<ConstraintViolation<LoginRequest>> violations = validator.validate(loginRequest);
        assertFalse(violations.isEmpty());
    }
}
