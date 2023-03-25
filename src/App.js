import './styles.modules.css'
import './index.css'
import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <header>
    <Header />
    </header>
    <main>
    <Main />
    </main>
    <footer>
    <Footer />
    </footer>
    </>
  );
}

export default App;
