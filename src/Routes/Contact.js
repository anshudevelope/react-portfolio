import React from 'react';
import Navbar from '../Components/Navbar';
import Heroimg from '../Components/Heroimg';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import Form from '../Components/Form';


const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2  heading = "Contact." text = "Various mediums to connect with me" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
