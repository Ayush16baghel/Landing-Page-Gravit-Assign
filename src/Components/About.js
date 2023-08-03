import React from "react";
import AboutBackground from "../Assets/defining-img.png";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import Navbar from './Navbar';
import Footer from "./Footer";

const About = () => {

    const aboutInfoData = [
        {
            image: PickMeals,
            title: "Our Services",
            text: "Lorem ipsum dolor sit amet consectetur. bibendum.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
        },
    ];
  return (
    <>
    <header><Navbar /></header>
    <div className="about-section-container">
      
      
      <div className="about-section-image-container">
        <img className="aboutimg" src={AboutBackground} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primaryA-heading">
          About Us 
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
         
        </p>
        <div className="about-sec-box">
                        {aboutInfoData.map((data) => (
                            <div className="about-section-info" key={data.title}>
                                <div className="info-boxes-img-container">
                                    <img className="about-img" src={data.image} alt="" />
                                </div>
                                <h2 className="text-box">{data.title}</h2>
                                <p className="text-box">{data.text}</p>
                            </div>
                            
                        ))}
                        
                    </div>
                 
                      
      </div>
    </div>
      <Footer></Footer>
    </>
  );
};

export default About;