import React from "react";
import Button from "react-bootstrap/Button";
import MovieReservationModal from "./MovieReservationModal";

const IndividualMovie = ({ movie }) => {

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt="description" />
      <p>{movie.genre}</p>
      <MovieReservationModal movie ={movie}/>
    </div>
  );
};

export default IndividualMovie;
