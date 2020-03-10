import React from "react";

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
