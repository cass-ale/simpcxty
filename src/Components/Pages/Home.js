import React from "react";
import Hero from "../Hero";
import Music from "../Music";
import Visuals from '../Visuals';
import Header from '../Header';
import Footer from '../Footer';

const scrollToComponent = (componentId) => {
    const component = document.getElementById(componentId);
    if (component) {
      window.scrollTo({
        top: component.offsetTop,
        behavior: "smooth"
      });
    } else {
      window.location.href = `/${componentId}`;
    }
  };
  const handleScrollToComponent = (componentId) => {
        scrollToComponent(componentId);
      };

function Home() {
    return (
        <>
        <header>
            <Header />
        </header>
        <main>
            <ul className="internalNav" id='internalNav'style={{display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'SpecialElite',
            fontSize: '2.5rem',
            cursor: 'pointer'}}>
                {/* <li onClick={() => {handleScrollToComponent('hero')}}>Latest</li> */}
                <li onClick={() => {handleScrollToComponent('music')}}>Sounds</li>
                <li onClick={() => {handleScrollToComponent('visuals')}}>Visuals</li>
            </ul>
            <Hero id={'hero'}/>
            <Music id={'music'}/>
            <Visuals id={'visuals'}/>
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default Home;