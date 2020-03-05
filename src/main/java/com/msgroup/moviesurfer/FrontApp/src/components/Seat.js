import React from "react";

/**
 * compare movie id to seat movieid. return r if reserved
 * and return f if seat is free. Return null if no id match.
 *
 * @param seat
 * @param movie
 * @returns {*}
 * @constructor
 */
const Seat = ({ seat, movie }) => {
  const IsReserved = () => {
    if (seat.reserved === true && seat.movieId === movie.id) {
      return (
        <input
          type="image"
          src="https://image.flaticon.com/icons/svg/1683/1683809.svg"
          className="seats"
        />
      );
    } else if (seat.reserved === false && seat.movieId === movie.id) {
      return (
        <input
          type="image"
          src="https://image.flaticon.com/icons/svg/1683/1683707.svg"
          className="seats"
        />
      );
    } else return null;
  };

  return (
    <div className="seats">
      <IsReserved seat={seat} />
    </div>
  );
};

export default Seat;
