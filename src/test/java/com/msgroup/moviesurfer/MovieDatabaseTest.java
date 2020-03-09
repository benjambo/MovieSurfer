package com.msgroup.moviesurfer;
import com.msgroup.moviesurfer.model.Movie;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.junit.After;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class MovieDatabaseTest {

    static SessionFactory sessionFactory;
    static Session session = null;
    static Movie movie;

    @BeforeAll
    static void before() {
        // setup the session factory and configure hibernate
        Configuration configuration = new Configuration();
        configuration.addAnnotatedClass(Movie.class);
        configuration.setProperty("hibernate.dialect",
                "org.hibernate.dialect.MySQL5Dialect");
        configuration.setProperty("hibernate.connection.driver_class",
                "com.mysql.cj.jdbc.Driver");
        configuration.setProperty("hibernate.connection.url", "jdbc:mysql://10.114.32.11:3306/moviesurfer");
        configuration.setProperty("hibernate.connection.username", "abdullah");
        configuration.setProperty("hibernate.connection.password", "moviesurfer");
        configuration.setProperty("hibernate.hbm2ddl.auto", "create-drop");
        sessionFactory = configuration.buildSessionFactory();
        session = sessionFactory.openSession();

        movie = new Movie();
        //movie object setup
        movie.setGenre("Horror");
        movie.setTitle("The Ring");
        movie.setImage("https://fi-seiska-cdn-pro.seiska.fi/files/styles/article_page_image_770px_wide/s3/2017-10/the_ring_thumb.jpg?itok=IRANZLcH");
        session.beginTransaction();
        session.saveOrUpdate(movie);
        session.evict(movie); //clear object from cache
        session.getTransaction().commit();
    }
    @Test
    public void getGenreFromMovieDatabaseTest(){
        Movie testMovie = new Movie();
        session.load(testMovie, (long)1);
        assertEquals("Horror", testMovie.getGenre());
        session.evict(testMovie);
    }
    @Test
    public void getTitleFromMovieDatabaseTest(){
        Movie testMovie = new Movie();
        session.load(testMovie,(long)1);
        assertEquals("The Ring", testMovie.getTitle());
        session.evict(testMovie);
        }

        @Test
        public void getImageFromMovieDatabase() {
            Movie testMovie = new Movie();
            session.load(testMovie, (long) 1);
            assertEquals("https://fi-seiska-cdn-pro.seiska.fi/files/styles/article_page_image_770px_wide/s3/2017-10/the_ring_thumb.jpg?itok=IRANZLcH", testMovie.getImage());
            session.evict(testMovie);
        }

        @After
        public void after () {
            session.close();
            sessionFactory.close();
        }
    }

