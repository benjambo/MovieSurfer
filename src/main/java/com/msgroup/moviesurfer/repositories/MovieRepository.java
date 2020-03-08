package com.msgroup.moviesurfer.repositories;

import com.msgroup.moviesurfer.model.Movie;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * MovieRepository interface manages the Movie entity, extends the JpaRepository and uses
 * it's methods to persist and retrieve Movie objects from the database.
 */
@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    @Override
    List<Movie> findAll();

}
