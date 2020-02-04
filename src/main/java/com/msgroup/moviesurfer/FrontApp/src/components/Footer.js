import React from "react";
import "../App.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="column">
        <li>
          <strong>MovieSurfer</strong>
        </li>
        <li>Kuusitie 10</li>
        <li>00100</li>
        <li>HELSINKI</li>
        <li>
          <a
            href="https://github.com/benjambo/MovieSurfer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github / MovieSurfer
          </a>
        </li>
      </ul>
      <ul className="column">
        <li>
          <strong>INFO</strong>
        </li>
        <li>msurfer@ms.com</li>
        <li>050 469342</li>
        <li>Availability through email:</li>
        <li>24 / 7</li>
      </ul>
      <ul className="column">
        <li>
          <strong>SERVICE HOURS</strong>
        </li>
        <li>Customer service</li>
        <li>open:</li>
        <li>Mon - Thu 6:00 - 21:00</li>
        <li>Friday 6:00 - 20:00</li>
        <li>Sat - Sun 10:00 - 20:00</li>
      </ul>
    </footer>
  );
};
