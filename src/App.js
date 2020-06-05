import React from 'react';
import './App.css';
import plantGif from './smileplant.gif'

function App() {
  return (
    <div>
      <div className='banner'>
      <img className="rotate330" src={plantGif} alt="missing"/>
      The Tudor Gardens Plant Directory
      <img className="rotate30" src={plantGif} alt="missing"/>
      </div>
    </div>
  );
}

export default App;
