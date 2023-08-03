import React from "react";
// import BannerBackground from "../Assets/Home.png";
import BannerImage from "../Assets/gallary.png";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";

const Home1 = () => {
    const homeInfoData = [
        {
            image: PickMeals,
            title: "Tech tool",
            text: "Lorem ipsum dolor sit amet consectetur. bibendum.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
        },
    ];
    return (
        <div className="home1-container">

            <div className="home-banner-container">

                <div className="home1-text-section">
                    <h1 className="primary-heading1">
                        Light, Fast & Powerful
                    </h1>
                    <p className="home1-primary-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus

                        mus.

                    </p>
                    <p className="home1-primary-text">Donec quam felis, ultricies nec, pellentesque eu, pretium quis,</p>
                    <div className="home-sec-box">
                        {homeInfoData.map((data) => (
                            <div className="home-section-info" key={data.title}>
                                <div className="info-boxes-img-container">
                                    <img className="home1-img" src={data.image} alt="" />
                                </div>
                                <h2 className="text-box">{data.title}</h2>
                                <p className="text-box">{data.text}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="home-image-section">
                    <img className="home-img" src={BannerImage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home1;