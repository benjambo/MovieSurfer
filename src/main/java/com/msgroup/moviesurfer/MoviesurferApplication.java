package com.msgroup.moviesurfer;

import com.msgroup.moviesurfer.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MoviesurferApplication implements CommandLineRunner {

    @Autowired
    UserRepository repository;

    public static void main(String[] args) {

        SpringApplication.run(MoviesurferApplication.class, args);

    }

    @Override
    public void run(String... args) throws Exception {

    }
}
