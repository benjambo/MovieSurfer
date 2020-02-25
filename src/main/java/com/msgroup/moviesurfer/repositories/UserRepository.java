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

    User findByEmail(String email);
    User getById(Long id);
    User findByRole(String role);

}
