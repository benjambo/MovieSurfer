import React from "react";
import marvel from "../assets/marvel.jpg";
import MovieCatalog from "../components/MovieCatalog";

// <img className="assetsImage" src={marvel} alt="Cinema" />

//TODO moviecatalog loppuun
export const Home = () => {
  return (
    <div>
      <MovieCatalog />
    </div>
  );
};
