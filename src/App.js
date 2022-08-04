import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Landing/Home/Home';
import Service from './components/Landing/Service/Service';

function App() {
  const homeRef = React.useRef(null);
  const serviceRef = React.useRef(null);

  const handleClick = (selection) => {
    if (selection === 'home') {
      homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (selection === 'service') {
      serviceRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="App">
      <Header selectItem={handleClick} />
      <section ref={homeRef} ><Home /></section>
      <section ref={serviceRef}><Service /></section>


      <Footer />
    </div>
  );
}

export default App;
