package com.msgroup.moviesurfer.services;

import com.msgroup.moviesurfer.model.User;
import com.msgroup.moviesurfer.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * When the user trying to log in , make sure that the user is actually exists so
 * UserDetailsService interface has to be implemented
 */
@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    MessageSource messageSource;

    public static String userRole = null;

    /**
     * To check if the user exists when the user trying to log in
     * @param userEmail in this case username = userEmail
     * @return user of type UserDetails
     * @throws UsernameNotFoundException exception
     */
    @Override
    public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(userEmail);
        if(user==null){
            System.out.println("The User " + userEmail + " not found. An exception thrown ");

            String userNotFound = messageSource.getMessage("customUserDetailsService.userNotFound", null, LocaleContextHolder.getLocale());
            throw new UsernameNotFoundException(userNotFound);
        }
        System.out.println( "The user: " + userEmail + " found from the database");
        userRole = user.getRole();
        System.out.println( "userRole: " + userRole);
        return user;
    }

}
