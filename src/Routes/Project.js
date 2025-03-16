import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import Pricecard from '../Components/Pricecard';
import Work from '../Components/Work';


const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading = "Projects." text = "Some of my Latest works." />
      <Work />
      <Pricecard />
      <Footer />

    </div>
  )
}

export default Project
