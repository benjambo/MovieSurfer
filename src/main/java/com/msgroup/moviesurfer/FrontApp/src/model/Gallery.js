import React from "react";
import street from "../assets/street.jpg";
import marvel from "../assets/marvel.jpg";
import neon from "../assets/blueneon.jpg";
import cinemaBar from "../assets/cinemabar.jpg";

export const Gallery = () => {
  return (
    <div>
      <img className="assetsImage" src={marvel} alt="Cinema" />
      <img className="assetsImage" src={street} alt="Street" />
      <img className="assetsImage" src={neon} alt="Neon Lights" />
      <img className="assetsImage" src={cinemaBar} alt="CinemaBar" />
    </div>
  );
};
