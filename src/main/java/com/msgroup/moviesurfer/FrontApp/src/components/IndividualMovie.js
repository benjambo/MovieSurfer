import React from "react";
import Button from "react-bootstrap/Button";

const IndividualMovie = ({ movie }) => {
  //TODO kuvat ja ulkoasu kuntoon
  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt="description" />
      <p>{movie.genre}</p>
      <Button>Reserve</Button>
    </div>
  );
};

export default IndividualMovie;
