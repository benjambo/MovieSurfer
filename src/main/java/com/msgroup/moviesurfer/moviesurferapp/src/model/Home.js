import React from "react";
import marvel from "../assets/marvel.jpg";

export const Home = () => {
  return (
    <div>
      <p>This is the Home Page</p>
      <img className="marvelImage" src={marvel} alt="Cinema" />
    </div>
  );
};
