import React from 'react';
import './NavBar';
import './App.css';
import './banner';
import './Wrapper';



import Navbar from './NavBar';
import Banner from './banner';
import SliderComponent from './Wrapper';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <SliderComponent />
        
    </div>
  );
}

export default App;
