import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The Best Movie Application for You!</p>
        <a
          className="App-link"
          href="https://github.com/benjambo/MovieSurfer"
          target="_blank"
          rel="noopener noreferrer"
        >
          MovieSurfer Development Teams Github
        </a>
      </header>
    </div>
  );
}

export default App;
