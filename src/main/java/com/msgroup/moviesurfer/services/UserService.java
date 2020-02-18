package com.msgroup.moviesurfer.services;

import com.msgroup.moviesurfer.exceptions.UniqueEmailException;
import com.msgroup.moviesurfer.model.User;
import com.msgroup.moviesurfer.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;



    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user){


             /*
            // check if user email is already registered in the database.
            if(userRepository.findByEmail(user.getEmail().toLowerCase())!= null){
                throw new UniqueEmailException("The email '" + user.getEmail() + "' is already registered!");
            }
            // set the email to lower case before saving it to the database.
            user.setEmail(user.getEmail().toLowerCase());
            // Encrypt the user password
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            return userRepository.save(user);

              */

            // Another way using try catch
            // During setting the user email, if it already exists, it will throw an exception
            try{
                // set the email to lower case before saving it to the database.
                // if the user email is already exists, it will throw an exception
                user.setEmail(user.getEmail().toLowerCase());
                // Encrypt the user password
                user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
                return userRepository.save(user);

            }catch(Exception e){
                throw new UniqueEmailException("The email '" + user.getEmail() + "' is already registered!");
            }


    }

    @Bean
    public void setAndSaveAdmin() {

        User admin = userRepository.findByRole("ADMIN");
     if(admin != null) {
         System.out.println("Admin " + admin.getEmail() + " found");
     }else{
            User newAdmin = new User();
            newAdmin.setRole("ADMIN");
            newAdmin.setFirstName("null");
            newAdmin.setLastName("null");
            newAdmin.setEmail("admin@moviesurfer.com");
            newAdmin.setPassword(bCryptPasswordEncoder.encode("moviesurfer"));
            userRepository.save(newAdmin);
            System.out.println("Admin Saved Successfully!");
        }

     }

    public List<User> getUsers(){

        return (List<User>) userRepository.findAll();
    }

    public User getUserById(Long id){

        return userRepository.getById(id);
    }


}
