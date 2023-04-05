import React from "react";
import SubForm from "./SubForm";
import Sub from "./Sub";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  function Footer() {
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const handleFormSubmit = () => {
      setFormSubmitted(true);
    };
  const handleFormReset = () => {
    setFormSubmitted(false);
  };
      
    return (
        <div className="footerContainer">


        <div className="footerTop">

        {/* Logo that doubles as a back to top scroll button */}
        <section id="simpcxty" onClick={handleClick} data-tooltip-id='scrollUp' data-tooltip-content="Scroll To Top">simpcxty</section>
        <ReactTooltip id="scrollUp" />


        <div className="footerLinks">
            NAVIGATION
            <Link to='/'>Home</Link>
            {/* <Link to='/PG'>P. G.</Link> */}
            <Link to='/contact' onClick={handleClick}>Contact</Link>
        </div>


        {/* Email Submission Form */}
        {formSubmitted ? (
          <Sub formReset={handleFormReset} />
        ) : (
          <SubForm formSubmit={handleFormSubmit} />
        )}




        </div>

        <hr />
        <section id='copyright'>© {new Date().getFullYear().toString()} CAPRI Media and simpcxty. All Rights Reserved. Use of this site constitutes acceptance of our <Link to="https://www.caprimag.com/privacy" target="_blank" rel="noopener noreferrer" onClick={handleClick}>Privacy</Link> and <Link to="https://www.caprimag.com/cookies" target="_blank" rel="noopener noreferrer" onClick={handleClick}>Cookie</Link> policies. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of CAPRI Media.</section>
        </div>
    )
}

export default Footer;
