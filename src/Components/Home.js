import React from "react";
import Hero from "./Hero";
import Music from "./Music";
import Videos from './Videos';
import Photos from './Photos';
import Store from './Store';
import Header from './Header';
import Footer from './Footer';


function Home() {
    return (
        <>
        <header>
            <Header />
        </header>
            <Hero />
            <Music />
            <Videos />
            <Photos />
            <Store />
        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default Home;