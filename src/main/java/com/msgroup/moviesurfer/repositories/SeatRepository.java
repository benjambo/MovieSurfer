package com.msgroup.moviesurfer.repositories;

import com.msgroup.moviesurfer.model.Seat;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;


//@Embeddable
@Repository
public interface SeatRepository extends JpaRepository<Seat,Long> {


    Seat getById(Long id);
    List<Seat> findAllByReserved(boolean b);
}


