import React from "react";
import { Spotify } from "react-spotify-embed";
import ten from "../Images/ten12cover.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSpotify,
    faApple
} from '@fortawesome/free-brands-svg-icons';



function Music() {
    return (
        <div className="music" id="music">
            <section className="firstAlbum">
            <section>
                <h2>TEN12, An Album By</h2> <span id="simpSpan" style={{fontFamily: "Kristi"}}>simpcxty</span>
            </section>
            <section className="ten12">
                <img src={ten} alt="Alternative Cover for TEN12 by simpcxty" />
            </section>
                <section className="tenLinks">
                    <a id="spotify" href="https://open.spotify.com/album/3cm4IUb0ydWvqbCEl9M136?si=z0SdGd15Sq2o7_R_6nxDUA" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSpotify} size="5x" /></a>
                    <a id="apple" href="https://music.apple.com/ng/album/ten12/1591993160" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faApple} size="5x" /></a>
                </section>
            </section>
            <section className="simpSession">
                <h2>LATEST SIMP SESSIONS</h2>
                <section className="players">
                <iframe id="yt" width="420" height="275" src="https://www.youtube-nocookie.com/embed/k8zgbGyUI2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe id="yt" width="420" height="275" src="https://www.youtube-nocookie.com/embed/-PeQ2icIZ8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>
            </section>
        </div>
    )
}

export default Music;