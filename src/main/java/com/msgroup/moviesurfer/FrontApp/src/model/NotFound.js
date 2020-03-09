import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jere from "../assets/jere.jpeg";


class NotFound extends React.Component {
    render()
    {
        return (
            <div>
                <img className="profilePicture" alt="jere" src={jere} />
                <p style={{color: "blue"}}>not found</p>
            </div>
        )

    }

}
export default NotFound;