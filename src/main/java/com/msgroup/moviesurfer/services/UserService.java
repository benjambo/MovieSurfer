package com.msgroup.moviesurfer.services;

import com.msgroup.moviesurfer.exceptions.UniqueEmailException;
import com.msgroup.moviesurfer.model.User;
import com.msgroup.moviesurfer.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 *
 *  Acts as a service for user objects & used by UserController
 */

@Service
public class UserService {

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;



    @Autowired
    private UserRepository userRepository;

    @Autowired
    MessageSource messageSource;

    /**
     * To save the user which passed from UserController to the database
     * @param user object
     * @return user object
     */
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
                String[] params = new String[]{user.getEmail()};
                String alreadyRegistered =  messageSource.getMessage("userService.alreadyRegistered", params, LocaleContextHolder.getLocale());
                throw new UniqueEmailException(alreadyRegistered);
            }


    }

    /**
     * This Bean will be managed and implemented by Spring to set and save an Admin object to the database
     */
    @Bean
    public void setAndSaveAdmin() {

        User admin = userRepository.findByRole("ADMIN");
     if(admin != null) {
         System.out.println("Admin " + admin.getEmail() + " found");
     }else{
            User newAdmin = new User();
            newAdmin.setRole("ADMIN");
            newAdmin.setFirstName("Administrator");
            newAdmin.setLastName("null");
            newAdmin.setEmail("admin@moviesurfer.com");
            newAdmin.setPassword(bCryptPasswordEncoder.encode("Moviesurfer2020"));
            userRepository.save(newAdmin);
            System.out.println("Admin Saved Successfully!");
        }

     }

    /**
     * To get all users
     * @return list of users
     */

    public List<User> getUsers(){

        return (List<User>) userRepository.findAll();
    }

    /**
     * To get user by id
     * @param id (type Long)
     * @return User object
     */
    public User getUserById(Long id){

        return userRepository.getById(id);
    }

    /**
     * To get a user by email
     * @param email type String
     * @return user object
     */
    public User getUserByEmail(String email){
        return userRepository.findByEmail(email);
    }


}
