import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";

const Routess =() =>(
    <Routes>
        <Route exact path="/" Component={Home}/>
        <Route  path="/Products" exact Component={Products}/>
        <Route  path="/Footer" exact Component={Footer}/>
        <Route  path="/About" exact Component={About}/>
        <Route  path="/Contact" exact Component={Contact}/>
    </Routes>
);
export default Routess;