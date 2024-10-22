import React from 'react'
import HomeHeader from './HomeHeader';
import Footer from './Footer';
import ScrollToTopOnMount from '../Scroll';

function Home() {
    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }
    return (
        <>
        <ScrollToTopOnMount />
        <header>
            <HomeHeader />
        </header>

        <main>

        <section id='mainText'><span id='simp' onClick={handleClick}>simpcxty</span></section>

            <div id="img2"></div>
            <div id='img1'></div>
            <div id="img4"></div>
            <div id='img5'></div>
            <div id="img6"></div>
            <div id="img7"></div>
            <div id="img3"></div>
            <div id="img8"></div>


        </main>

        <footer>
            <Footer />
        </footer>

        </>
    )
}

export default Home;