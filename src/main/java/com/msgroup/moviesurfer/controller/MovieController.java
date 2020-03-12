package com.msgroup.moviesurfer.controller;

import com.msgroup.moviesurfer.model.Movie;

import com.msgroup.moviesurfer.services.MovieService;
import com.msgroup.moviesurfer.services.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * MovieController handles the http requests to add edit or remove movies
 *
 */
@RestController // Marks the class as web controller, which handles the http requests
@RequestMapping (value="/api")
public class MovieController {

    @Autowired
    private MovieService movieService;

    // To use SeatService in MovieController it should be annotated with @Transactional
    @Autowired
    private SeatService seatService;

    /**
     * addMovie receives http post request from the client to add a movie.
     * // @valid to pass a valid request body of type Movie ,so if an empty request body passed
     * it will response with a status of 404.
     * BindingResult analyzes the Movie object and checks weather or not there are errors for example: blank title.
     * BindingResult will return a list of the detected errors List<FieldError>.
     *  ResponseEntity<?>: question mark is for a generic type.
     *  ResponseEntity represents the whole HTTP response: status code, headers, and body. Used to fully configure the HTTP response.
     * @param movie (movie object)
     * @param result (a list of detected errors )
     * @return ResponseEntity
     */
    @PostMapping(value="/addmovie")
    public ResponseEntity<?> addMovie(@Valid @RequestBody Movie movie, BindingResult result) {
        // Validation for @NotBlank annotation
        if(result.hasErrors()) {
            // Map<k,v> Key value pair
            Map<String, String> errorMap = new HashMap<>();
            for(FieldError error: result.getFieldErrors()) {
            // key:field, value: default message
            // add the key value pair error to the errorMap object
            errorMap.put(error.getField(),error.getDefaultMessage());
            }
            return new ResponseEntity< Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
            // return new ResponseEntity<List<FieldError>>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
        }else{
            movieService.save(movie);
            System.out.println("New movie added successfully");
            return new ResponseEntity<String>("Movie added successfully",HttpStatus.OK);
        }
    }


    /**
     * To get all movies, it could be an empty list if there is no movies
     * @return list of movies
     */
    @GetMapping(value="/movies")
    public List<Movie> getMovies(){
        return movieService.getMovies();

    }

    // To delete a movie by it's id

    /**
     * To delete a movie by id
     * @param id (movie's id)
     * @return ResponseEntity of type String
     */
    @DeleteMapping(value="/movies/delete/{id}")
    public ResponseEntity<?>deleteMovie(@PathVariable Long id) {
        System.out.println("movie to be deleted " + id);
        // Movie movie = movieService.getMovieById(id);
        try {
            movieService.deleteMovie(id);
            seatService.deleteSeatsByMovieId(id);
           return new ResponseEntity<String>("Movie deleted successfully!", HttpStatus.OK);

        } catch (EmptyResultDataAccessException | EntityNotFoundException e) {
            return new ResponseEntity<String>("Movie not found!", HttpStatus.BAD_REQUEST);
        }

    }
}
