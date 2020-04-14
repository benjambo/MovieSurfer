package com.msgroup.moviesurfer;
import com.msgroup.moviesurfer.model.LoginRequest;
import org.junit.BeforeClass;
import org.junit.jupiter.api.Test;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class LoginRequestTest {

    private static Validator validator;

    @BeforeClass
    public static void setUp(){
        validator = Validation.buildDefaultValidatorFactory().getValidator();
    }

    @Test
    public void testLoginReq(){
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setEmail(" ");
        loginRequest.setPassword(" ");

        //validator.validate returns null vaikka pitäis tulla vähintään tyhjä Set
        Set<ConstraintViolation<LoginRequest>> violations = validator.validate(loginRequest);


        assertEquals(2, violations.size());
    }


}
