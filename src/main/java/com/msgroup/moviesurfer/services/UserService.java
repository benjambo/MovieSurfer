package com.msgroup.moviesurfer.services;

import com.msgroup.moviesurfer.model.User;
import com.msgroup.moviesurfer.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

   @Autowired
    private UserRepository userRepository;

    public User saveUser(User user){

       return userRepository.save(user);

    }
}
