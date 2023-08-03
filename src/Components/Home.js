import React from "react";
// import BannerBackground from "../Assets/Home.png";
import BannerImage from "../Assets/home.png";
// import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Navbar from './Navbar';
import Home1 from "./Home1";
import Home2 from "./Home2";
import Payment from "./Payment";

const Home = () => {
  return (
    <>
    <div className="home-container">
      <header><Navbar /></header>
      {/* <Navbar /> */}
      <div className="home-banner-container">
        {/* <div className="home-bannerImage-container">
          <img className="home-img" src={BannerBackground} alt="" />
        </div> */}
        <div className="home-text-section">
          <h1 className="primary-heading">
          Introduce Your Product Quickly & Effectively
          </h1>
          <p className="primary-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean 
commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
penatibus et magnis dis parturient montes, nascetur ridiculus 

          </p><p className="primary-text">Donec quam felis, ultricies nec, pellentesque eu, pretium quis,</p>
          <div className="btn-container">
            <button className="secondary-button">
            Purchase UI Kit <FiArrowRight />{" "}
          </button>
          <button className="secondary-button2">
            Learn More
          </button>
          </div>
        </div>
        <div className="home-image-section">
          <img className="home-img" src={BannerImage} alt="" />
        </div>
      </div>
    </div>
    <Home1/>
    <Home2/>
    <Payment/>
    </>
  );
};

export default Home;