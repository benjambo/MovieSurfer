import React from "react";

const IndividualMovie = ({ movie }) => {
  //TODO kuvat ja ulkoasu kuntoon
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.genre}</p>
    </div>
  );
};

export default IndividualMovie;
