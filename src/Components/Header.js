import React, {useState} from "react";
import MobileMenu from "./MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faTwitter,
    faTiktok,
    faYoutube,
    faFacebook,
    faSpotify,
    faApple
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
//Install FontAwesome packs for both brand icons and standard icons using npm command in terminal
//npm install --save @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons

const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


const socials = [
    {
        icon: faInstagram,
        url: "https://www.instagram.com/simpcxty/",
    },
    {
        icon: faTwitter,
        url: "https://twitter.com/simpcxty",
    },
    {
        icon: faTiktok,
        url: "https://www.tiktok.com/@simpcxtyofficial",
    },
    {
        icon: faYoutube,
        url: "https://www.youtube.com/@simpcxtyofficial",
    },
    {
        icon: faFacebook,
        url: "https://www.facebook.com/simpcxty",
    },
    {
        icon: faSpotify,
        url: "https://open.spotify.com/artist/55M5VOLETNx33iEJTOMjYV",
    },
    {
        icon: faApple,
        url: "https://music.apple.com/us/artist/simpcxty/1577660132"
    }
]
// Icons and social media URLs stored inside of an array (named socials) of objects that contain the icon for the social media website and its corresponding URL for cleaner + easier reference in the Header() function code block.



function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const openMenu = () => {
        setShowMenu(true);
    }
    const closeMenu = () => {
        setShowMenu(false);
    }

    return (

        <nav className="headerBar">
            <section id="mobile"><FontAwesomeIcon icon={faBars} onClick={openMenu} size="3x" /></section>
            {showMenu && <MobileMenu closeMenu={closeMenu} showMenu={showMenu} />}

{/*Navigation Links: first third of navbar. Unordered list to be styled in CSS to be a horizontal list with proper styling.*/}
            <ul className="nav">
                {/* <li><Link to="/PG">P. G.</Link></li> */}
                <li><Link to="/contact">Contact</Link></li>
            </ul>


{/* Main artist/site title */}

            <p id="title"><Link to="/" data-tooltip-id='header' data-tooltip-content="Return Home" onClick={handleClick}>simpcxty</Link></p>
            <ReactTooltip id="header" />

{/* Socials + Icons */}
            {<nav className="icons">
                <a href={socials[0].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[0].icon} size="2x" />
                </a>
                <a href={socials[1].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[1].icon} size="2x" />
                </a>
                <a href={socials[2].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[2].icon} size="2x" />
                </a>
                <a href={socials[3].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[3].icon} size="2x" />
                </a>
                <a href={socials[4].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[4].icon} size="2x" />
                </a>
                <a href={socials[5].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[5].icon} size="2x" />
                </a>
                <a href={socials[6].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[6].icon} size="2x" />
                </a>
            </nav>}
        </nav>
    )
}

export default Header;