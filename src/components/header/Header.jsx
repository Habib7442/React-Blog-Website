import "./Header.css";
import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { Wave, Random } from "react-animated-text";

const Header = () => {
  return (
    <div className="header">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 headerImg"
            src={require("../../assets/carousel1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <div style={{ fontSize: "40px" }}>
              <Wave text="Welcome" />
            </div>
            {/* <h1>Welcome</h1> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 headerImg"
            src={require("../../assets/carousel2.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div style={{ fontSize: "40px" }}>
              <Random
                text="Welcome"
                effect="jump"
                effectChange={2.0}
                effectDuration={0.3}
                className="text"
              />
            </div>
            {/* <h1>Welcome</h1> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 headerImg"
            src={require("../../assets/carousel3.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div style={{ fontSize: "40px" }}>
              <Wave text="Welcome" className="text" />
            </div>
            {/* <h1>Welcome</h1> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <div className="headerTitles">
        <span className="headerTitleSm">React</span>
        <span className="headerTitleLg">Blog</span>
      </div> */}
      {/* <img
        className="headerImg"
        src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      /> */}
    </div>
  );
};

export default Header;
