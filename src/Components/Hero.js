import React, {useState} from "react";
import placeholder from '../Images/placehold.webp'
import newRelease from "../Images/newestRelease.png";
import Alt from '../Images/SaturdayAlt.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

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
            <LazyLoadImage onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} width={560} height={560} placeholderSrc={placeholder} effect="blur" src={imgSrc} alt="Newest Release From simpcxty Available Now!" />
        </section>
        </a>


        <section className="cta">
        <p id="songTitle">'Saturday'<br/>
            Feat. KING JAAAH
        </p>

        <a href='https://unitedmasters.com/m/642b4f481e4cf0054bfba477' target="_blank" rel="noopener noreferrer"><button className="button">
            <p>LISTEN NOW</p>
        </button></a>
        </section>
        </div>
    )
}

export default Hero;