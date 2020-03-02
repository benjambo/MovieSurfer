package com.msgroup.moviesurfer.services;

import com.msgroup.moviesurfer.model.Seat;


import com.msgroup.moviesurfer.repositories.SeatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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


    public Seat getSeatById(Long id){
        return seatRepository.getById(id);
    }

    public void updateSeat(Seat seat){

        seatRepository.save(seat);
    }

}




