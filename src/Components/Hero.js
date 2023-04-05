import React, {useState} from "react";
import newRelease from "../Images/newestRelease.png";
import Alt from '../Images/SaturdayAlt.png'

function Hero() {
const [imgSrc, setImgSrc] = useState(newRelease);
const handleMouseOver = () => {
    setImgSrc(Alt);
}
const handleMouseOut = () => {
    setImgSrc(newRelease);
}
    return (
        <div className="hero" id='hero'>

        <a href='https://unitedmasters.com/m/642b4f481e4cf0054bfba477' target="_blank" rel="noopener noreferrer">
        <section className="heroImage">
            <img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={imgSrc} alt="Newest Release From simpcxty Available Now!" />
        </section>
        </a>


        <section className="cta">
        <p id="songTitle">'Saturday'<br/>
            Feat. King Jaah
        </p>

        <a href='https://unitedmasters.com/m/642b4f481e4cf0054bfba477' target="_blank" rel="noopener noreferrer"><button className="button">
            <p>LISTEN NOW</p>
        </button></a>
        </section>
        </div>
    )
}

export default Hero;