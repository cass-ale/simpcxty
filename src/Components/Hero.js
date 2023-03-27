import React from "react";
import newRelease from "../Images/newestRelease.png";


function Hero() {
    return (
        <div className="hero">

        <a href='#'>
        <section className="heroImage">
            <img src={newRelease} alt="Newest Release From simpcxty Available Now!" />
        </section>
        </a>


        <section className="cta">
        <p id="songTitle">'Saturday'<br/>
            Feat. King Jaah
        </p>

        <a href='#'><button className="button">
            <p>LISTEN NOW</p>
        </button></a>
        </section>
        </div>
    )
}

export default Hero;