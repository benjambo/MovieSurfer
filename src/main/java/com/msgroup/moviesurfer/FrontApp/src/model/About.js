import React from "react";

export const About = () => {
  return <div>
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="first-slide"
               src="https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1524518669406-2D0YA93DDYGDKYHXOZUU/ke17ZwdGBToddI8pDm48kKFYOtK8W4VIIm-D7unIF7lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwC26LRMJwK8bCYeHqiJdGGAY7jUqG9Ai63KPiOW2tVcFehCc4d35tVad10Z5dYSro/Screen+Shot+2018-04-23+at+5.23.41+PM.png?format=2500w"
               alt="First slide"/>
            <div className="container">
              <div className="carousel-caption">
                <h1>Walter Ruoppa</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at
                  eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </div>
            </div>
        </div>
        <div className="carousel-item">
          <img className="second-slide"
               src="https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1524518669406-2D0YA93DDYGDKYHXOZUU/ke17ZwdGBToddI8pDm48kKFYOtK8W4VIIm-D7unIF7lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwC26LRMJwK8bCYeHqiJdGGAY7jUqG9Ai63KPiOW2tVcFehCc4d35tVad10Z5dYSro/Screen+Shot+2018-04-23+at+5.23.41+PM.png?format=2500w"
               alt="Second slide"/>
            <div className="container">
              <div className="carousel-caption">
                <h1>Abdullah Hinnawi</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at
                  eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </div>
            </div>
        </div>
        <div className="carousel-item">
          <img className="fourth-slide"
               src="https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1524518669406-2D0YA93DDYGDKYHXOZUU/ke17ZwdGBToddI8pDm48kKFYOtK8W4VIIm-D7unIF7lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwC26LRMJwK8bCYeHqiJdGGAY7jUqG9Ai63KPiOW2tVcFehCc4d35tVad10Z5dYSro/Screen+Shot+2018-04-23+at+5.23.41+PM.png?format=2500w"
               alt="Second slide"/>
          <div className="container">
            <div className="carousel-caption">
              <h1>Benjamin Bowo</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at
                eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="third-slide"
               src="https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1524518669406-2D0YA93DDYGDKYHXOZUU/ke17ZwdGBToddI8pDm48kKFYOtK8W4VIIm-D7unIF7lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwC26LRMJwK8bCYeHqiJdGGAY7jUqG9Ai63KPiOW2tVcFehCc4d35tVad10Z5dYSro/Screen+Shot+2018-04-23+at+5.23.41+PM.png?format=2500w"
               alt="Third slide"/>
            <div className="container">
              <div className="carousel-caption">
                <h1>Jere Saarelma</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at
                  eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </div>
            </div>
        </div>

      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div></div>;
};
