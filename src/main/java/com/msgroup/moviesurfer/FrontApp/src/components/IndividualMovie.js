import React, { useState } from "react";
import MovieReservationModal from "./MovieReservationModal";
import ConfirmationModal from "./ConfirmationModal";
import { Spring } from "react-spring/renderprops";

const IndividualMovie = ({ movie }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reservedSeat, setReservedSeat] = useState(0);

  return (
    <div>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 800 }}
      >
        {props => (
          <div style={props}>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt="description" />
            <p>{movie.genre}</p>
          </div>
        )}
      </Spring>
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
      />
    </div>
  );
};

export default IndividualMovie;
