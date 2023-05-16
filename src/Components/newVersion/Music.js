import React from 'react'
import MusicHeader from "./MusicHeader";
import Footer from './Footer';
import Hero from '../Hero';
import ScrollToTopOnMount from '../Scroll';
import Latest from './Latest';
import TenTwelve from './TenTwelve';
import SimpSesh from './SimpSesh';
import YoutubeVids from './YoutubeVids';



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
            <YoutubeVids />

        </main>

        <footer>
            <Footer />
        </footer>

        </>
    )
}

export default Music;