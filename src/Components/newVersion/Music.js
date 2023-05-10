import React from 'react'
import MusicHeader from "./MusicHeader";
import Footer from './Footer';



function Music() {
    return (
        <>
        <header>
            <MusicHeader />
        </header>

        <main className='music'>
            <div className='musicBG' />

        </main>

        <footer>
            <Footer />
        </footer>

        </>
    )
}

export default Music;