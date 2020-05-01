package com.msgroup.moviesurfer.repositories;

import com.msgroup.moviesurfer.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


/**
 * UserRepository interface manages the User entity, extends the CrudRepository and uses
 * it's CRUD methods to persist and retrieve User objects from the database.
 *
 */
@Repository
public interface UserRepository extends CrudRepository<User, Long> { // Long refers to the type of User object's Id


   // @Override
   // List<User> findAll();

    /**
     * To get a user by email
     * @param email user email
     * @return user object
     */
    User findByEmail(String email);

    /**
     * To get a user by id
     * @param id user id
     * @return user object
     */
    User getById(Long id);

    /**
     * To get a user by role
     * @param role user role
     * @return user object
     */
    User findByRole(String role);

}
