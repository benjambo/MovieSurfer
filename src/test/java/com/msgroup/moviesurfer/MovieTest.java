package com.msgroup.moviesurfer;

import com.msgroup.moviesurfer.model.Movie;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * Tests for movie entities
 */

public class MovieTest {
    Movie movie = new Movie();
    @Test
    public void testMovieTitle(){

        String testTitle = "Avengers Endgame";

        movie.setTitle(testTitle);
        assertEquals(testTitle, movie.getTitle(), "wrong title");
    }

    @Test
    public void testMovieGenre(){

        String testMovieGenre = "Fantasy";

        movie.setGenre(testMovieGenre);
        assertEquals(testMovieGenre, movie.getGenre(), "wrong genre");
    }

    @Test
    public void testMovieImage(){

        String testMovieImage = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.jp%2Fpin%2F653373858418263610%2F&psig=AOvVaw0F2lmxelVZCi5w4u8cSCOp&ust=1583173323574000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiI4K_y-ecCFQAAAAAdAAAAABAD";

        movie.setImage(testMovieImage);
        assertEquals(testMovieImage, movie.getImage(), "image not found");
    }

    @Test
    public void TestMovieId(){

        long movieId = 12345;

        movie.setId(movieId);
        assertEquals(movieId, movie.getId(), "wrong id");
    }

}

