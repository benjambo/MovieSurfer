package com.msgroup.moviesurfer;

import com.msgroup.moviesurfer.model.Seat;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * Tests for seat entities
 */
public class SeatTest {

        Seat seat = new Seat();

        @Test
        public void testSeatId(){

            long id = 1;
            seat.setId(id);
            assertEquals(id, seat.getId(), "wrong id");
        }

        @Test
        public void testSeatNumber(){
            int seatNumber = 50;

           seat.setNumber(seatNumber);
            assertEquals(seatNumber, seat.getNumber(), "wrong number");
        }

        @Test
        public void testReserved(){

            boolean testReserved = false;

            seat.setReserved(testReserved);
            assertEquals(testReserved, seat.isReserved(), "wrong boolean");
        }

        @Test
        public void TestReservedTo(){

            String reservedTo = "email.address@ms.com";

            seat.setReservedTo(reservedTo);
            assertEquals(reservedTo, seat.getReservedTo(), "wrong string");
        }
}
