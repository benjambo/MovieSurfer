import React from "react";
import marvel from "../assets/marvel.jpg";
import MovieCatalog from "../components/MovieCatalog";

//TODO moviecatalog loppuun
export const Home = () => {
  return (
    <div>
      <MovieCatalog />
      <img className="assetsImage" src={marvel} alt="Cinema" />
    </div>
  );
};
