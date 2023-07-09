import React from 'react'
import MusicHeader from "./MusicHeader";
import Hero from '../Hero';
import ScrollToTopOnMount from '../Scroll';
import Latest from './Latest';
import TenTwelve from './TenTwelve';
import SimpSesh from './SimpSesh';



function Music() {
    return (
        <>
        <ScrollToTopOnMount />
        <header>
            <MusicHeader />
        </header>

        <main className='music'>


        <div className='musicBG'>
            <Hero />

            <div className='fader' />
        </div>

            <Latest />

            <div className='firstAlbum'>
                <section className='tracklist'>
                    TEN12, An Album By <span id='simp'>simpcxty</span>
                </section>
                <TenTwelve />
            </div>
            <SimpSesh />

        </main>

        <footer>
        </footer>

        </>
    )
}

export default Music;