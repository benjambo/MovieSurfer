import React, { useEffect, useState } from "react";
import seatServiceReact from "../services/seatServiceReact";
import Seat from "./Seat";

/**
 * get movie seats using seatservicereact.
 *
 * @param movie
 * @returns {*}
 * @constructor
 */
const MovieSeats = ({ movie, setFreeSeat, setReservedSeat, setSeatObject }) => {
  const [seats, setSeats] = useState([]);

  const [reserve, setReserve] = useState("");

  useEffect(() => {
    seatServiceReact.getAll().then(result => {
      setSeats(result);
    });
  }, []);

  const MapSeats = ({ seats }) => {
    const mapMovies = () =>
      seats.map(seat => (
        <Seat
          key={seat.id}
          seat={seat}
          movie={movie}
          setReserve={setReserve}
          setFreeSeat={setFreeSeat}
          setReservedSeat={setReservedSeat}
          setSeatObject={setSeatObject}
        />
      ));
    return <div className="reservation-grid">{mapMovies()}</div>;
  };
  return (
    <div className="background-modal">
      <MapSeats seats={seats} />
      {reserve}
    </div>
  );
};

export default MovieSeats;
