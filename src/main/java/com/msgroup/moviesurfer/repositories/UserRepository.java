package com.msgroup.moviesurfer.repositories;

/**
 *
 *  Pakage: repositories
 * After we define the domain models, we have to create the repositories for persisting
 * these domain models to the database and retrieving them
 */

// UserRepository interface manages the User entity.


import com.msgroup.moviesurfer.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> { // Long refers to the type of User object's Id


   // @Override
   // List<User> findAll();
}
