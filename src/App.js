import React, {useState, useEffect} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import './App.css';

export default function App() {
  const colors = [
    "#fed049",
    "#007580",
    "#282846",
    "#d8ebe4",
    "#c5d7bd",
    "#9fb8ad",
    "#383e56",
    "#fb743e",
    "#dddddd",
    "#222831",
    "#30475e",
    "#f05454",


  ];
    const colors = [
    "#fed049",
    "#007580",
    "#282846",
    "#d8ebe4",
    "#c5d7bd",
    "#9fb8ad",
    "#383e56",
    "#fb743e",
    "#dddddd",
    "#222831",
    "#30475e",
    "#f05454",


  ];
    const colorddddknslkSDNFS = [
    "#fed049",
    "#007580",
    "#282846",
    "#d8ebe4",
    "#c5d7bd",
    "#9fb8ad",
    "#383e56",
    "#fb743e",
    "#dddddd",
    "#222831",
    "#30475e",
    "#f05454",


  ];
    const colors = [
    "#fed049",
    "#007580",
    "#282846",
    "#d8ebe4",
    "#c5d7bd",
    "#9fb8ad",
    "#383e56",
    "#fb743e",
    "#dddddd",
    "#222831",
    "#30475e",
    "#f05454",


  ];
  const[background, setBackground]= useState("#dddddd");
  const[current, setCurrent]= useState(null);

  return (

    <div className="App" style={{background: background}}>
    {current !==null && <h1>Copied {current}</h1>}
      <div className="Container">
      {colors.map((color, index)=>
        <div key={index} className="card">
          <div className ="box">
          </div>

        </div>)}
      </div>


    </div>
  );
}

export default App;
