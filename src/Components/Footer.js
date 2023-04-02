import React from "react";
import SubForm from "./SubForm";

const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  function Footer() {
    return (
        <div className="footerContainer">


        <div className="footerTop">

        {/* Logo that doubles as a back to top scroll button */}
        <section id="simpcxty" onClick={handleClick}>simpcxty</section>


        <div className="footerLinks">
            NAVIGATION
            <a href='#music'>Sounds</a>
            <a href='#visuals'>Visuals</a>
            <a href='#store'>Customs</a>
        </div>


        {/* Email Submission Form */}
        <SubForm />




        </div>

        <hr />
        <section id='copyright'>© CAPRI Media {new Date().getFullYear().toString()} © simpcxty {new Date().getFullYear().toString()}. All Rights Reserved. Use of this site constitutes acceptance of our <a href="https://www.caprimag.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a> and <a href="https://www.caprimag.com/cookies" target="_blank" rel="noopener noreferrer">Cookie</a> policies. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of CAPRI Media.</section>
        </div>
    )
}

export default Footer;