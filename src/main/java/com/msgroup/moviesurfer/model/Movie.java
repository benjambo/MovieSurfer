package com.msgroup.moviesurfer.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Movie {
    private String genre;
    private String title;
    private String image;
    private int year;
    @Id
    private long id;

    public long getId() { return id; }

    public void setId(long id) { this.id = id; }

    public String getGenre() { return genre; }

    public void setGenre(String genre) { this.genre = genre; }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }

    public String getImage() { return image; }

    public void setImage(String image) { this.image = image; }

    public int getYear() { return year; }

    public void setYear(int year) { this.year = year; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    private String description;

    public Movie() {

    }
}
