import React from 'react';
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx';
import Contact from './Components/Contact.jsx';
function App() {
  return (
    <>
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}

export default App;