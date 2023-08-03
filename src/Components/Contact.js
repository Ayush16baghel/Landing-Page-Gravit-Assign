import React from "react";
import Navbar from './Navbar';
import Footer from "./Footer";
const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <header><Navbar /></header>
      <h1 className="contact-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;