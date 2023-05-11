import React from 'react'
import MusicHeader from "./MusicHeader";
import Footer from './Footer';
import Hero from '../Hero';



function Music() {
    return (
        <>
  
        <header>
            <MusicHeader />
        </header>

        <main className='music'>
        <div className='musicBG'>
            <Hero />

            <div className='fader' />
        </div>
            <section className='firstAlbum'>
            Yo
            </section>

        </main>

        <footer>
            <Footer />
        </footer>

        </>
    )
}

export default Music;