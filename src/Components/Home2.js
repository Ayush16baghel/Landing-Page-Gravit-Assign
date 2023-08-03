import React from "react";
import HomePic from "../Assets/about-pic.png"
import HomePics from "../Assets/swan-pic.png"
import HomePicss from "../Assets/abt2-img.png"



const Home2 = () => {

  const homeInfoData = [
    {
        heading: "Light, Fast & Powerful",
        text: "  Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non etelit. Dolor turpis molestie dui magnis facilisis at fringilla quam. ",
        image1: HomePic,
        text1: "Non tincidunt magna non et elit. Dolor turpis molestie dui magnisfacilisis at fringilla quam. "
        
    },
    {
      heading: "Light, Fast & Powerful",
      text: "  Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non etelit. Dolor turpis molestie dui magnis facilisis at fringilla quam. ", 
      image1: HomePics,
      text1: "Non tincidunt magna non et elit. Dolor turpis molestie dui magnisfacilisis at fringilla quam. "
      
  },
  {
    heading: "Light, Fast & Powerful",
    text: "  Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non etelit. Dolor turpis molestie dui magnis facilisis at fringilla quam. ",
    image1: HomePicss,
    text1: "Non tincidunt magna non et elit. Dolor turpis molestie dui magnisfacilisis at fringilla quam. ",
   
},
   
];
  
return (
  <div>
    {homeInfoData.map((data) => (
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img className="abt-img" src={data.image1} alt="" />
      </div>
      <div className="about-section-text-container">
        
        <h1 className="primary-heading">
         {data.heading}
        </h1>
        <p className="primary-text">
          {data.text}
        </p>
        <p className="primary-text">
          {data.text1}
        </p>
        
      </div>

       </div>
       ))}
       <div className="btn1-container">
            <button className="secondary3-button">
           Purchase Now
          </button>
          </div>
    </div>

  );
};

export default Home2;