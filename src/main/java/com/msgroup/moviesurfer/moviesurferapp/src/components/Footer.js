import React from "react";
import "../App.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="column">
        <li>
          <strong>MovieSurfer</strong>
        </li>
        <li>MovieSurfer Office</li>
        <li>Lönnrotinkatu 32</li>
        <li>00180</li>
        <li>HELSINKI</li>
        <li>
          <a href="https://github.com/benjambo/MovieSurfer">
            Github / MovieSurfer
          </a>
        </li>
      </ul>
      <ul className="column">
        <li>
          <strong>INFO</strong>
        </li>
        <li>moviesurfer@ms.com</li>
        <li>040 547349</li>
        <li>Availability on weekdays:</li>
        <li>9:00 - 16:00</li>
      </ul>
      <ul className="column">
        <li>
          <strong>OPENING HOURS</strong>
        </li>
        <li>Movie shop</li>
        <li>open:</li>
        <li>Mon - Thu 6:00 - 18:00</li>
        <li>Friday 6:00 - 21:00</li>
        <li>Sat - Sun 10:00 - 20:00</li>
      </ul>
    </footer>
  );
};
