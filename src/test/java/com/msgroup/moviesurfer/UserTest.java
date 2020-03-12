package com.msgroup.moviesurfer;


import com.msgroup.moviesurfer.model.User;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * Tests for user entities
 */

public class UserTest {

    @Test
    public void testFirstName(){
        User user = new User();
        String testName = "john";

        user.setFirstName(testName);
        assertEquals(testName, user.getFirstName(), "wrong name");
    }

    @Test
    public void testLastName(){
        User user = new User();
        String testName = "Smith";

        user.setLastName(testName);
        assertEquals(testName, user.getLastName(), "wrong lastname");
    }

    @Test
    public void testEmail(){
        User user = new User();
        String testEmail = "moviesurfer@moviesurfer.com";

        user.setEmail(testEmail);
        assertEquals(testEmail, user.getEmail(), "wrong email");
    }

    @Test
    public void TestPassword(){
        User user = new User();
        String testPassword = "password";

        user.setPassword(testPassword);
        assertEquals(testPassword, user.getPassword(), "password is wrong");
    }

    @Test
    public void TestId(){
        User user = new User();
        long testId = 1111111111;

        user.setId(testId);
        assertEquals(testId, user.getId(), "id is wrong");
    }
}
