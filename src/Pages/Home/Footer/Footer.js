import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import './Footer.css'
const Footer = () => {
    return (


        <div className=" footer-section py-5 px-5 text-center">
            <ScrollToTop smooth top="300" />
            <h6>Copyright © 2021 afranul-hoque-full-stack-mern-developer.netlify.app </h6>
        </div>
    );
};

export default Footer;