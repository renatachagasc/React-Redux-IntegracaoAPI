import React from 'react';
import logo from './logo.svg';
import './App.css';
import Renata from './Renata';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>Meu projeto em React</p>
      
      <Renata></Renata>
      </header>
    </div>
  );
}

export default App;
