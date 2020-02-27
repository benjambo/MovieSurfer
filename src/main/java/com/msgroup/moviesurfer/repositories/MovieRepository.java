package com.msgroup.moviesurfer.repositories;

import com.msgroup.moviesurfer.model.Movie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Long> {
    @Override
    Movie save(Movie movie);
}
