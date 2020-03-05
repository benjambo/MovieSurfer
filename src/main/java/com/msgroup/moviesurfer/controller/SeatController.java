package com.msgroup.moviesurfer.controller;
import com.msgroup.moviesurfer.model.Seat;
import com.msgroup.moviesurfer.services.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api")
public class SeatController {

    @Autowired
    private SeatService seatService;

    Map<String, String> errorMap = new HashMap<>();



    @GetMapping(value="/seats")
    public List<Seat> getSeats(){


        return seatService.getSeats();
    }

    @GetMapping(value="/seats/reserved")
    public List<Seat> getReservedSeats(){


        return seatService.getReservedSeats();
    }

    // To reserve single seat
    @PostMapping(value = "/seats/reserve")
    public ResponseEntity<?> reserveSeat(@Valid @RequestBody Seat seat, BindingResult result) {

        // Validation for @NotBlank
        if (result.hasErrors()) {
            for (FieldError error : result.getFieldErrors()) {
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
            }
            else {
                reservableSeat.setReserved(true);
                seatService.updateSeat(reservableSeat);
                return new ResponseEntity<String>("Seat reserved successfully! ", HttpStatus.OK);
            }

        }

    }




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
