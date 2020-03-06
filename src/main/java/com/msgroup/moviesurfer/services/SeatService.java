package com.msgroup.moviesurfer.services;

import com.msgroup.moviesurfer.model.Seat;


import com.msgroup.moviesurfer.repositories.SeatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class SeatService {

    @Autowired
    private SeatRepository seatRepository;





    public List<Seat> getSeats(){
       return seatRepository.findAll();
    }

    public List<Seat> getReservedSeats(){

        return seatRepository.findAllByReserved(true);
    }

    public List<Seat> getSeatsByMovieId(Long movieId){
        return seatRepository.findAllByMovieId(movieId);
    }

    public void deleteSeatsByMovieId(Long movieId){
         seatRepository.deleteAllByMovieId(movieId);
         System.out.println("Seats of movie " + movieId + " deleted successfully");
    }


    public Seat getSeatById(Long id){
        return seatRepository.getById(id);
    }

    public void updateSeat(Seat seat){

        seatRepository.save(seat);
    }

}




