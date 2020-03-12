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


    Seat getById(Long id);
    List<Seat> findAllByReserved(boolean b);
    List<Seat> findAllByMovieId(Long movieId);
    List<Seat> deleteAllByMovieId(Long movieId);
}


