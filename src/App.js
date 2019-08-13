import React from 'react';
import './App.css';
import Header from './Components/Header';
import Image from './Components/Image';
import InfoBox from './Components/Info Box';

function App() {
  return (
    <div className="App">
      <div id="personalInfo">
        <Image />
      </div>
      <div id="content">
        <Header />
        <InfoBox />
      </div>
    </div>
      
  );
}

export default App;
