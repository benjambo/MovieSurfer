package com.msgroup.moviesurfer.controller;

import com.msgroup.moviesurfer.model.Movie;
import com.msgroup.moviesurfer.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping (value="/api")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @PostMapping(value="/addmovie")
    public ResponseEntity<?> addMovie(@Valid @RequestBody Movie movie, BindingResult result) {

        if(result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            for(FieldError error: result.getFieldErrors()) {
            errorMap.put(error.getField(),error.getDefaultMessage());
            }
            return new ResponseEntity< Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }else{
            Movie newMovie = movieService.save(movie);
            System.out.println("New movie added successfully");
            return new ResponseEntity<String>("Movie added successfully",HttpStatus.OK);
        }
    }


    @GetMapping(value="/movies")
    public List<Movie> getMovies(){
        return movieService.getMovies();

    }


}
