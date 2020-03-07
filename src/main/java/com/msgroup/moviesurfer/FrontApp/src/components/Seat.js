import React from "react";
import greenSeat from "../assets/greenseat.png";
import redSeat from "../assets/redseat.png";

/**
 * compare movie id to seat movieid. return r if reserved
 * and return f if seat is free. Return null if no id match.
 *
 * @param seat
 * @param movie
 * @param setReserve
 * @returns {*}
 * @constructor
 */

const Seat = ({ seat, movie, setReserve, setFreeSeat, setReservedSeat }) => {
  const greenSeatClickHandler = () => {
    setReserve("Picked seat number " + seat.number);
    setFreeSeat(true);
    setReservedSeat(seat.number);
  };

  const redSeatClickHandler = () => {
    setReserve("Seat number " + seat.number + " is not available");
    setFreeSeat(false);
  };

  const GetSeats = () => {
    if (seat.reserved === true && seat.movieId === movie.id) {
      return (
        <input
          type="image"
          src={redSeat}
          onClick={redSeatClickHandler}
          className="seats"
          alt="Reserved seat"
        />
      );
    } else if (seat.reserved === false && seat.movieId === movie.id) {
      return (
        <input
          type="image"
          src={greenSeat}
          onClick={greenSeatClickHandler}
          className="seats"
          alt="Free seat"
        />
      );
    } else return null;
  };

  return (
    <div className="seats">
      <GetSeats seat={seat} />
    </div>
  );
};

export default Seat;
