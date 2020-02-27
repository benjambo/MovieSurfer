package com.msgroup.moviesurfer.services;

import com.msgroup.moviesurfer.model.Movie;
import com.msgroup.moviesurfer.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;
    public Movie save(Movie movie) {
        return movieRepository.save(movie);
    }
}
