package com.msgroup.moviesurfer.controller;
import com.msgroup.moviesurfer.model.Movie;
import com.msgroup.moviesurfer.model.Seat;
import com.msgroup.moviesurfer.model.User;
import com.msgroup.moviesurfer.services.CustomEmailService;
import com.msgroup.moviesurfer.services.MovieService;
import com.msgroup.moviesurfer.services.SeatService;
import com.msgroup.moviesurfer.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
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
    UserService userService;

    @Autowired
    private CustomEmailService customEmailService;

    @Autowired
    MessageSource messageSource;


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


    /**
     * To reserve a single seat
     * @param seat object
     * @return  return response entity of type String
     * @throws Exception
     */

    @PostMapping(value = "/seats/reserve")
    public ResponseEntity<?> reserveSeat(@RequestBody Seat seat) throws Exception {

        Seat reservableSeat = seatService.getSeatById(seat.getId());

        if (reservableSeat == null) {

            return new ResponseEntity<String>("Seat not found!", HttpStatus.BAD_REQUEST);

        }
        else {
            reservableSeat.setReservedTo(seat.getReservedTo());
            reservableSeat.setReserved(true);
            seatService.updateSeat(reservableSeat);

            // when the seat is reserved, send an email to confirm seat reservation
            Movie m = movieService.getMovieById(reservableSeat.getMovieId());

            User user = userService.getUserByEmail(reservableSeat.getReservedTo());

            String fNameMessage = messageSource.getMessage("seatController.fNameMessage", null, LocaleContextHolder.getLocale());
            String emailMessage = messageSource.getMessage("seatController.emailMessage", null,LocaleContextHolder.getLocale() );
            String mMessage =  messageSource.getMessage("seatController.mMessage", null,LocaleContextHolder.getLocale() );
            String snMessage = messageSource.getMessage("seatController.snMessage", null,LocaleContextHolder.getLocale() );
            String thMessage = messageSource.getMessage("seatController.thMessage", null,LocaleContextHolder.getLocale() );
            String tMessage = messageSource.getMessage("seatController.tMessage", null,LocaleContextHolder.getLocale() );

            // set ticket's information
            String fullName = fNameMessage + ": "+ user.getFirstName() + " " + user.getLastName();
            String email = emailMessage+ ": " + reservableSeat.getReservedTo();
            String movie = mMessage + ": " + m.getTitle();
            String seatNumber = snMessage + ": " + reservableSeat.getNumber();
            String theater = thMessage;
            String time = tMessage + ": 19.00";

            ArrayList<String> ticketInfo = new ArrayList<>();
            ticketInfo.add(fullName);
            ticketInfo.add(email);
            ticketInfo.add(movie);
            ticketInfo.add(seatNumber);
            ticketInfo.add(theater);
            ticketInfo.add(time);

            String from = "moviesurfer2020@gmail.com";
            String to = reservableSeat.getReservedTo();
            String emailSubject = messageSource.getMessage("seatController.emailSubject", null, LocaleContextHolder.getLocale());
            customEmailService.sendEmailWithAttachments(from,  to, emailSubject, ticketInfo);
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