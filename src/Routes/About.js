import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import Aboutpage from '../Components/Aboutpage';


const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading = "About Me." text = "A brief about Who I am!"/>
      <Aboutpage />
      <Footer />
    </div>
  )
}

export default About
