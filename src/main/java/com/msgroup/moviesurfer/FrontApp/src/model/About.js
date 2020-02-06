import React from "react";
//src/main/java/com/msgroup/moviesurfer/FrontApp/src/assets/jere.jpg
import jere from "../assets/jere.jpg";
import walter from "../assets/walter.jpg";
import abdullah from "../assets/abdullah.jpg";
export const About = () => {
  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="kuva" alt="jere" src={jere} />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="text captionText">Jere Saarelma</h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="kuva" alt="walter" src={walter} />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="text captionText">Walter Ruoppa</h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="kuva" alt="abdullah" src={abdullah} />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="text captionText">Abdullah Hinnawi</h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="kuva"
              src="https://cdn.discordapp.com/attachments/669861606221545478/674941265296752641/SPOILER_B885DA30-C2B4-45E2-8EB1-11A88019D4E4_1_105_c.jpeg"
              alt="bennn"
            />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="text captionText">Benjamin Bowo</h1>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
