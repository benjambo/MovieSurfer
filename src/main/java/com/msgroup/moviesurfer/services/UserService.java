package com.msgroup.moviesurfer.services;

import com.msgroup.moviesurfer.exceptions.UniqueEmailException;
import com.msgroup.moviesurfer.model.User;
import com.msgroup.moviesurfer.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {



    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user){

            if(userRepository.findByEmail(user.getEmail())!= null){
                throw new UniqueEmailException("The email '" + user.getEmail() + "' is already registered!");
            }
            return userRepository.save(user);

    }

    public List<User> getUsers(){
        return (List<User>) userRepository.findAll();
    }

    public User getUserById(Long id){

        return userRepository.findById(id).get();
    }
}
