import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import jere from "../assets/jere.jpeg";

import page from "../assets/pagenotfound.jpg";

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <img className="assetsImage" alt="Not Found" src={page} />
      </div>
    );
  }
}
export default NotFound;
