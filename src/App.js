import './styles.modules.css'
import './index.css'
import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div
      className='appBackground'>
        <div className='backgroundTint' />
    <div
      className='backgroundImage'
       />
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
