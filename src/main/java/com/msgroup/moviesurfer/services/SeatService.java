package com.msgroup.moviesurfer.services;

import com.msgroup.moviesurfer.model.Seat;


import com.msgroup.moviesurfer.repositories.SeatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Acts as a service & used by SeatController
 */
@Transactional
@Service
public class SeatService {

    @Autowired
    private SeatRepository seatRepository;


    /**
     * To get all seats
     * @return list of seats
     */

    public List<Seat> getSeats(){
       return seatRepository.findAll();
    }

    /**
     * To get Reserved seats
     * @return list of reserved seats
     */
    public List<Seat> getReservedSeats(){

        return seatRepository.findAllByReserved(true);
    }

    /**
     * To get seats by movie id
     * @param movieId
     * @return list of seats
     */
    public List<Seat> getSeatsByMovieId(Long movieId){
        return seatRepository.findAllByMovieId(movieId);
    }

    /**
     * To delete seats by movie id
     * @param movieId
     */
    public void deleteSeatsByMovieId(Long movieId){
         seatRepository.deleteAllByMovieId(movieId);
         System.out.println("Seats of movie " + movieId + " deleted successfully");
    }

    /**
     * To get seat by id
     * @param id (type Long)
     * @return seat object
     */
    public Seat getSeatById(Long id){
        return seatRepository.getById(id);
    }

    /**
     * TO update seat info
     * @param seat object
     */
    public void updateSeat(Seat seat){

        seatRepository.save(seat);
    }

}




