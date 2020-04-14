package com.msgroup.moviesurfer;
import com.msgroup.moviesurfer.model.LoginRequest;
import org.junit.BeforeClass;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

public class LoginRequestTest {


    private final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

    /*
    @BeforeClass
    public static void setUp(){
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
    }


     */

    @Test
    public void testLoginReq() throws Exception{
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setEmail("sdfs ");
        loginRequest.setPassword(" sdfsd");

        //validator.validate returns null vaikka pitäis tulla vähintään tyhjä Set
        Set<ConstraintViolation<LoginRequest>> violations = validator.validate(loginRequest);


       // assertEquals(2, violations.size());
        assertFalse(violations.isEmpty());

    }


}
