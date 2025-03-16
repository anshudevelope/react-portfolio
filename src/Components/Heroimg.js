import "./Heroimg.css";
import React from 'react';
import Introimg from '../assets/heroimg.jpg'


const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="hero-img" src={Introimg} alt="hero image"></img>
      </div>
    </div>
  )
}

export default Heroimg;


