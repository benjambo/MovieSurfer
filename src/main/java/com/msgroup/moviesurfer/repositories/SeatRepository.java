package com.msgroup.moviesurfer.repositories;

import com.msgroup.moviesurfer.model.Seat;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;


/**
 *
 * SeatRepository interface manages the Seat entity, extends the JpaRepository and uses
 *  * it's methods to persist and retrieve Seat objects from the database.
 */
//@Embeddable
@Repository
public interface SeatRepository extends JpaRepository<Seat,Long> {

    /**
     * TO get a seat by id
     * @param id seat's id
     * @return seat object
     */
    Seat getById(Long id);

    /**
     * To get all reserved seats
     * @param b isReserved = true/false
     * @return list of seat's
     */
    List<Seat> findAllByReserved(boolean b);

    /**
     * To get the seats which belong to a particular movie
     * @param movieId movie id
     * @return list of seats
     */
    List<Seat> findAllByMovieId(Long movieId);

    /**
     * To delete all seats which belong to a particular movie
     * @param movieId movie id
     */
    void deleteAllByMovieId(Long movieId);
}


