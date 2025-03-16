import "./Navbarstyle.css";

import React, {useState}  from 'react';
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";





const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <div id="navbar">
      <Link to="/">
        <h1>ReactPortFolio.</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? ( <FaTimes size={20} style={{ color: "#ffffff"}} />) : ( <FaBars size={20} style={{ color: "#ffffff"}} />)}
      </div>

    </div>
  )
}

export default Navbar
