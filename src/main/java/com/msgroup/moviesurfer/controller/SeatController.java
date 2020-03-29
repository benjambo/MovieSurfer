package com.msgroup.moviesurfer.controller;
import com.msgroup.moviesurfer.model.Movie;
import com.msgroup.moviesurfer.model.Seat;
import com.msgroup.moviesurfer.services.CustomEmailService;
import com.msgroup.moviesurfer.services.MovieService;
import com.msgroup.moviesurfer.services.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


/**
 * SeatController handles the http requests to add edit or remove seats
 */
@RestController
@RequestMapping(value = "/api")
public class SeatController {

    @Autowired
    private SeatService seatService;

    @Autowired
    MovieService movieService;

    @Autowired
    private CustomEmailService customEmailService;


    /**
     * To get all seats
     * @return list of seats
     */
    @GetMapping(value="/seats")
    public List<Seat> getSeats(){

        return seatService.getSeats();
    }

    /**
     * To get reserved seats
     * @return list of reserved seats
     */
    @GetMapping(value="/seats/reserved")
    public List<Seat> getReservedSeats(){

        return seatService.getReservedSeats();
    }


    // To reserve single seat

    /**
     * To reserve a single seat
     * @param id the seat's id to be reserved
     * @Param seat object to get updated reservedTo value.
     * @return response entity of type String
     */
    @PostMapping(value = "/seats/reserve/{id}")
    public ResponseEntity<?> reserveSeat(@PathVariable Long id, @RequestBody Seat seat) throws Exception {

        Seat reservableSeat = seatService.getSeatById(id);
        System.out.println(seat.getNumber());

        if (reservableSeat == null) {

            return new ResponseEntity<String>("Seat not found!", HttpStatus.BAD_REQUEST);

        }
        else {
            reservableSeat.setReservedTo(seat.getReservedTo());
            reservableSeat.setReserved(true);
            seatService.updateSeat(reservableSeat);

            // when the seat is reserved, send an email to confirm seat reservation
            Movie m = movieService.getMovieById(reservableSeat.getMovieId());
            // set ticket's information
            String fullName = "Full Name: User";
            String email = seat.getReservedTo();
            String movie = "Movie: " + m.getTitle();
            String seatNumber = "Seat Number: " + reservableSeat.getNumber();
            String theater = "Theater: Theater";
            String time = "Time: 19.00";
            ArrayList<String> ticketInfo = new ArrayList<>();
            ticketInfo.add(fullName);
            ticketInfo.add(email);
            ticketInfo.add(movie);
            ticketInfo.add(seatNumber);
            ticketInfo.add(theater);
            ticketInfo.add(time);
            customEmailService.sendEmailWithAttachments("moviesurfer2020@gmail.com", email, "Seat Reservation Confirmation", ticketInfo);
            System.out.println("Confirmation email sent successfully!");

            return new ResponseEntity<String>("Seat reserved successfully! ", HttpStatus.OK);
        }

    }

    /*
    // To reserve single seat
    @PostMapping(value = "/seats/reserve")
    public ResponseEntity<?> reserveSeat(@Valid @RequestBody Seat seat, BindingResult result) {

        // Validation for @NotBlank
        if (result.hasErrors()) {
            for (FieldError error : result.getFieldErrors()) {
                //Map<String, String> errorMap = new HashMap<>();
                // key:field , value:default message
                // add the key value pair error to the errorMap object
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        } else {

            Seat reservableSeat = seatService.getSeatById(seat.getId());

            if (reservableSeat == null) {

                 return new ResponseEntity<String>("Seat not found!", HttpStatus.BAD_REQUEST);

            }else if(reservableSeat.isReserved()){
                return new ResponseEntity<String>("Seat is already reserved!", HttpStatus.BAD_REQUEST);
            }else if(!seat.isReserved()){
                return new ResponseEntity<String>("reserved value must be true!", HttpStatus.BAD_REQUEST);
            }
            else if(seat.getNumber() != reservableSeat.getNumber()){
                return new ResponseEntity<String>("Seat number not match", HttpStatus.BAD_REQUEST);
            }else if(seat.getMovieId() != reservableSeat.getMovieId()){
                return new ResponseEntity<String>("Seat's movieId not match'", HttpStatus.BAD_REQUEST);
            }
            else {
                reservableSeat.setReserved(true);
                seatService.updateSeat(reservableSeat);
                return new ResponseEntity<String>("Seat reserved successfully! ", HttpStatus.OK);
            }

        }

    }

*/


    // To reserve multiple seats
    /*
    @PostMapping(value = "/seats/reserve")
    public ResponseEntity<?> reserveSeat(@Valid @RequestBody List<Seat> seats) {


            for (Seat seat : seats) {
              Seat reservableSeat = seatService.getSeatById(seat.getId());


                if(reservableSeat == null){
                    return new ResponseEntity<String>("One or more seat ids not found!", HttpStatus.BAD_REQUEST);

                }else {
                    reservableSeat.setReserved(true);
                    seatService.updateSeat(reservableSeat);
            }
            }


            return new ResponseEntity<String>("Seats reserved successfully!", HttpStatus.OK);

    }


     */


}