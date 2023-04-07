import React, { useEffect} from "react";
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
import { faClose } from "@fortawesome/free-solid-svg-icons";


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

const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

function MobileMenu(props) {
    const onClick = () => {
        props.closeMenu();
    }


    useEffect(() => {
        function handleResize() {
          if (window.innerWidth > 768 && props.showMenu) {
            props.closeMenu();
          }
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      });
  


    return (
        <div className="mobileMenu">
            <section className="formClose"><FontAwesomeIcon icon={faClose} onClick={onClick} size="2x"/></section>
          <nav className="mobileNav">
            <ul>
                <li><a href="/" onClick={handleClick}>Home</a></li><br />
                <li><a href="/contact" onClick={handleClick}>Contact</a></li><br />
                {/* <li><a href="/PG" onClick={handleClick}>P. G.</a></li><br /> */}
            </ul>
            {<nav className="mobileIcons">
                <a href={socials[0].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[0].icon} size="1x" />
                </a>
                <a href={socials[1].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[1].icon} size="1x" />
                </a>
                <a href={socials[2].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[2].icon} size="1x" />
                </a>
                <a href={socials[3].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[3].icon} size="1x" />
                </a>
                <a href={socials[4].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[4].icon} size="1x" />
                </a>
                <a href={socials[5].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[5].icon} size="1x" />
                </a>
                <a href={socials[6].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[6].icon} size="1x" />
                </a>
            </nav>}
        </nav>
        </div>
    );
}

export default MobileMenu;