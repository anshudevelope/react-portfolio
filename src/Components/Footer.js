import React from 'react';
import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaFacebook, FaLinkedin, FaInstagram  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaLocationDot size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>U178, Laxmi Nagar Marto Station</p>
                            <p>New Delhi, 110095</p>
                        </div>
                    </div>

                    <div className='phone'>
                        <h4><FaPhoneAlt size={20} style={{ color: "#fff", marginRight: "2rem" }} /> +91 6386789089</h4>
                    </div>

                    <div className='email'>
                        <h4><MdEmail size={20} style={{ color: "#fff", marginRight: "2rem" }} />ansh.maurya7300@gmail.com</h4>
                    </div>

                </div>

                <div className='right'>
                    <h4>Brief about me!</h4>
                    <p>Highly motivated and detail-oriented Frontend Developer with a strong foundation in React.js, JavaScript, HTML, and CSS.</p>
                    <div className='social'>
                    <FaFacebook  size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <FaInstagram  size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <FaLinkedin  size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
