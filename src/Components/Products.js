import React from "react";
// import BannerBackground from "../Assets/phone.jpg";

import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import PhonePic from "../Assets/Phone.png";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Products = () => {
    const productInfoData = [
        {
            heading: "Real me Note 10 pro",
            text: " Donec quam felis, ultricies nec, pellentesque eu, pretium quis, dnewkdjwejdejheid eidh de dehdue he dhdheh dhedueh due due duhuedehd ",
            image: PhonePic,
            image1: PickMeals,
            image2: ChooseMeals,
            title: " Know More About Product",
            title1: " Choose How Often",
            text1: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et "

        },
        {
            heading: "Real me Note 10 pro",
            text: " Donec quam felis, ultricies nec, pellentesque eu, pretium quis, dnewkdjwejdejheid eidh de dehdue he dhdheh dhedueh due due duhuedehd ",
            image: PhonePic,
            image1: PickMeals,
            image2: ChooseMeals,
            title: " Know More About Product",
            title1: " Choose How Often",
            text1: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
            text2: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis,"
        },

    ];

    return (
      
        <div className="product-container">
            <Navbar/>
            {productInfoData.map((data) => (


                <div className="home-banner-container">

                    <div className="home1-text-section">
                        <h1 className="primary-heading1">
                            {data.heading}
                        </h1>
                        <p className="home1-primary-text">
                            {data.text}

                        </p>
                        <p className="home1-primary-text">{data.text2}</p>
                        <div className="product-sec-box">
                            <div className="product-section-info" key={data.title}>
                                <div className="info-boxes-img-container">
                                    <img className="home1-img" src={data.image1} alt="" />
                                </div>
                                <h2 className="text1-box">{data.title}</h2>
                                <p className="text1-box">{data.text1}</p>
                            </div>
                            <div className="info-boxes-img-container">
                                    <img className="home1-img" src={data.image2} alt="" />
                                </div>
                                <h2 className="text1-box">{data.title1}</h2>
                                <p className="text1-box">{data.text1}</p>
                        </div>
                    </div>
                    <div className="product-image-section">
                        <img className="product-img" src={data.image} alt="" />  
                    </div>
                 
                </div>
                
                
            ))}
           <Footer></Footer>
        </div>
    );
};

export default Products;