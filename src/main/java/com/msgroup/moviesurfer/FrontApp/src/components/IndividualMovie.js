import React, { useState } from "react";
import MovieReservationModal from "./MovieReservationModal";
import ConfirmationModal from "./ConfirmationModal";

const IndividualMovie = ({ movie }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reservedSeat, setReservedSeat] = useState(0);

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt="description" />
      <p>{movie.genre}</p>
      <MovieReservationModal
        movie={movie}
        setShowConfirmation={setShowConfirmation}
        setReservedSeat={setReservedSeat}
      />
      <ConfirmationModal
        showConfirmation={showConfirmation}
        setShowConfirmation={setShowConfirmation}
        movie={movie}
        reservedSeat={reservedSeat}
      ></ConfirmationModal>
    </div>
  );
};

export default IndividualMovie;
