package com.msgroup.moviesurfer.services;

import com.msgroup.moviesurfer.model.Movie;
import com.msgroup.moviesurfer.model.Seat;
import com.msgroup.moviesurfer.repositories.MovieRepository;
import com.msgroup.moviesurfer.repositories.SeatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Acts as a service & used by MovieController
 *
 */

@Service // Indicates that an annotated class is a service class (component)
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private SeatRepository seatRepository;

    /**
     * To save or update a movie (the movie's id has to be passed for updating)
     * @param movie object
     * @return movie object
     */
    public Movie save(Movie movie) {

        Movie newMovie = movieRepository.save(movie);

        // creat seats for the movie
        for (int i = 0; i < 16; i++) {
            Seat seat = new Seat();
            seat.setNumber(i+1);
            seat.setReserved(false);
            seat.setMovieId(newMovie.getId());
            seatRepository.save(seat);
        }
        System.out.println("Seats saved Successfully!");

        return newMovie;

    }

    /**
     * To get all movies
     * @return list of movies
     */
    public List<Movie> getMovies(){

        return movieRepository.findAll();
    }

    /**
     * To delete a movie by it's id
     * @param id (movie's id)
     */
    public void deleteMovie(Long id) {
        movieRepository.deleteById(id);
        System.out.println("Movie " + id + " deleted! successfully!");

    }

    /**
     * To get a movie by it's id
     * @param id (movie'id)
     * @return movie object
     */
    public Movie getMovieById(Long id) {

        return movieRepository.getOne(id);
    }


}
