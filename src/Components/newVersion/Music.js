import React from 'react'
import MusicHeader from "./MusicHeader";
import Footer from './Footer';
import Hero from '../Hero';
import ScrollToTopOnMount from '../Scroll';
import TenTwelve from './TenTwelve';



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
            <div className='firstAlbum'>
            <section className='tracklist'>
                TEN12, An Album By <span id='simp'>simpcxty</span>
            </section>
                <TenTwelve />
            </div>

        </main>

        <footer>
            <Footer />
        </footer>

        </>
    )
}

export default Music;