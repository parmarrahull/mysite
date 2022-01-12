import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Info from './components/Info';
import Info2 from './components/Info2';
import Myskill from './components/Myskill';
import Projects from './components/Projects';


function App() {
  return (
   <>
    <Home />
    <Info />
    <Info2 />
    <Myskill />
    <Projects />
    <Contact />
    <Footer />
   </>
  );
};

export default App;