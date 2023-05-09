import './simp.modules.css'
import './index.css'
import React from 'react';
import Home from './Components/newVersion/Home';
import Contact from './Components/newVersion/Contact'
import Music from './Components/newVersion/Music';
import Press from './Components/newVersion/Press';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'



function App() {
  return (
    <ChakraProvider>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/press' element={<Press />} />
        <Route exact path='/music' element={<Music />} />
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;
