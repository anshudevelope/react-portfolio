import "./Heroimg.css";
import React from 'react';
import Introimg from '../assets/heroimg.jpg'
import { Link } from "react-router-dom";


const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="hero-img" src={Introimg} alt="hero image"></img>
      </div>
      <div className="content">
        <p>I'AM FRONTEND DEVELOPER</p>
        <h1>REACT DEVELOPER</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg;


