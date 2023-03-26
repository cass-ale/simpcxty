import './styles.modules.css'
import './index.css'
import background from './Images/background.JPEG';
import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div
      className='appBackground'
      style={{
        position: 'relative',
        height: '100vh',
      }}>
    <div
      className='backgroundImage'
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: '-1',
        opacity: '0.5',
    }} />
    <header>
    <Header />
    </header>
    <main>
    <Main />
    </main>
    <footer>
    <Footer />
    </footer>
    </div>
  );
}

export default App;
