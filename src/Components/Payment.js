import React from "react";
import Footer from "./Footer";

const Payment = () => {
  return (
    <div className="payment-page-wrapper">
      <h1 className="primary-heading">A Price to Suit Everyone</h1>
      <p className="payment1-primary-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean 
commodo ligula eget dolor. Aenean massa.  dis parturient montes, nascetur ridiculus 
          </p>
          <br></br>
      <h1 className="primary1-heading"  >$40</h1>
      <h2 className="payment2-primary-text">
          UI DESIGN KIT
          </h2>
      
          <p className="payment1-primary-text">
          See, One price Simple 
          </p>
        <button className="secondary2-button">Purchase Now</button>
        <Footer/>
    </div>
  );
};

export default Payment;