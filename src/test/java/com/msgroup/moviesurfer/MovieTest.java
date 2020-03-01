package com.msgroup.moviesurfer;

import com.msgroup.moviesurfer.model.Movie;
import com.msgroup.moviesurfer.model.User;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class MovieTest {
    @Test
    public void testMovieTitle(){
        Movie movie = new Movie();
        String testTitle = "Avengers Endgame";

        movie.setTitle(testTitle);
        assertEquals(testTitle, movie.getTitle(), "wrong title");
    }

    @Test
    public void testMovieGenre(){
        Movie movie = new Movie();
        String testMovieGenre = "Fantasy";

        movie.setTitle(testMovieGenre);
        assertEquals(testMovieGenre, movie.getTitle(), "wrong genre");
    }

    @Test
    public void testMovieImage(){
        Movie movie = new Movie();
        String testMovieImage = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.jp%2Fpin%2F653373858418263610%2F&psig=AOvVaw0F2lmxelVZCi5w4u8cSCOp&ust=1583173323574000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiI4K_y-ecCFQAAAAAdAAAAABAD";

        movie.setTitle(testMovieImage);
        assertEquals(testMovieImage, movie.getTitle(), "image not found");
    }

    @Test
    public void TestmovieId(){
        Movie movie = new Movie();
        String TestmovieId = "12345";

        movie.setTitle(TestmovieId);
        assertEquals(TestmovieId, movie.getTitle(), "wrong name");
    }

}

