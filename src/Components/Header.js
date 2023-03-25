import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faTwitter,
    faTiktok,
    faYoutube,
    faFacebook,
    faSpotify,
    faApple
} from '@fortawesome/free-brands-svg-icons'
//Install FontAwesome packs for both brand icons and standard icons using npm command in terminal
//npm install --save @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons


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
    return (
//GOAL: Navigation links will activate a scroll function to bring the corresponding element/component into the viewport instead of loading new pages.
//NavBar will have navigation links to the left, main site/artist title center, social media icon+link to the right. Containing each piece in class container named headerBar.
//NavBar should follow user as they scroll down the page.
        <nav className="headerBar">


{/*Navigation Links: first third of navbar. Unordered list to be styled in CSS to be a horizontal list with proper styling.*/}
            <ul className="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Visuals</a></li>
                <li><a href="#">Store</a></li>
            </ul>


{/* Main artist/site title */}
            <p className="h1">simpcxty</p>


{/* Socials + Icons */}
            {<nav className="icons">
                <a href={socials[0].url}>
                    <FontAwesomeIcon icon={socials[0].icon} size="2x" />
                </a>
                <a href={socials[1].url}>
                    <FontAwesomeIcon icon={socials[1].icon} size="2x" />
                </a>
                <a href={socials[2].url}>
                    <FontAwesomeIcon icon={socials[2].icon} size="2x" />
                </a>
                <a href={socials[3].url}>
                    <FontAwesomeIcon icon={socials[3].icon} size="2x" />
                </a>
                <a href={socials[4].url}>
                    <FontAwesomeIcon icon={socials[4].icon} size="2x" />
                </a>
                <a href={socials[5].url}>
                    <FontAwesomeIcon icon={socials[5].icon} size="2x" />
                </a>
                <a href={socials[6].url}>
                    <FontAwesomeIcon icon={socials[6].icon} size="2x" />
                </a>
            </nav>}
        </nav>
    )
}

export default Header;