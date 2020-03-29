package com.msgroup.moviesurfer.model;



import javax.persistence.*;

/**
 * Seat Entity
 */

//@Embeddable
@Entity
public class Seat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private  int number;


    private boolean reserved;

    private String reservedTo;

    private Long movieId;

    // Empty constructor
    public Seat() {
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public boolean isReserved() {
        return reserved;
    }

    public void setReserved(boolean reserved) {
        this.reserved = reserved;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public String getReservedTo() { return reservedTo; }

    public void setReservedTo(String reservedTo) { this.reservedTo = reservedTo; }
}
