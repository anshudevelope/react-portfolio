import './Projectcard.css';
import React from 'react';
import { NavLink } from 'react-router-dom';


const Projectcard = (props) => {
  return (
    <div className='project-card'>
    <img src={props.imgsrc} alt='project1'></img>
    <h2 className='pro-title'>{props.title}</h2>
    <div className='pro-details'>
      <p>{props.details}</p>
      <div className='pro-btns'>
        <NavLink to={props.link} target='_blank' className="btn">View</NavLink>
        <NavLink to='#' className="btn">Source</NavLink>
      </div>
    </div>
  </div>
  )
}

export default Projectcard
