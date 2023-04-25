import './styles.modules.css'
import './index.css'
import React from 'react';
import Home from './Components/Home';
import Contact from './Components/Contact'
import Store from './Components/PG/Store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';



function App() {
  return (
    <div
      className='appBackground'>
        <div className='backgroundTint' />
    <div
      className='backgroundImage'
    />
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/PG' element={<Store />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
