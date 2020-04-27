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

    /**
     * Empty constructor
     */
    public Seat() {
        reservedTo= null;
    }

    /**
     * To get seat's id
     * @return id type Long
     */
    public Long getId() {
        return id;
    }

    /**
     * To set seat's id
     * @param id type Long
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * To get seat's number
     * @return number type int
     */
    public int getNumber() {
        return number;
    }

    /**
     * To set seat's number
     * @param number type int
     */
    public void setNumber(int number) {
        this.number = number;
    }

    /**
     * To check if the seat is reserved
     * @return reserved type boolean
     */
    public boolean isReserved() {
        return reserved;
    }

    /**
     * To set the seat as reserved
     * @param reserved type boolean
     */
    public void setReserved(boolean reserved) {
        this.reserved = reserved;
    }

    /**
     * To get seat's movie id
     * @return movieId type Long
     */
    public Long getMovieId() {
        return movieId;
    }

    /**
     * To set seat's movieId
     * @param movieId type Long
     */
    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    /**
     * To get the user's email who reserved the seat
     * @return reservedTo type String
     */
    public String getReservedTo() { return reservedTo; }

    /**
     *  To set user's email who reserving the seat
     * @param reservedTo type String
     */
    public void setReservedTo(String reservedTo) { this.reservedTo = reservedTo; }
}
