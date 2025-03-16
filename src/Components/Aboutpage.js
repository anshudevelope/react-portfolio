import "./Aboutpage.css";
import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.jpg"


const Aboutpage = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Want to know me?</h1>
        <p>Aspiring React.js Developer with a strong foundation in JavaScript, HTML, CSS, and front-end development. Passionate about building dynamic and interactive web applications using React.js, Redux, and modern UI libraries.</p>
        <Link to="/Contact">
        <button className="btn">Contact</button></Link>
      </div>

      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={React2} alt="" className="img"></img>
            </div>
            <div className="img-stack bottom">
                <img src={React1} alt="" className="img"></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage;
