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
      return <p className="seats">R</p>;
    } else if (seat.reserved === false && seat.movieId === movie.id) {
      return <p className="seats">F</p>;
    } else return null;
  };

  return (
    <div className="seats">
      <IsReserved seat={seat} />
    </div>
  );
};

export default Seat;
