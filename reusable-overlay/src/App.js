import React, { useState } from 'react';
import './App.css';
import Model from './component/Model/Model';

function App() {

  const [isModelOpen, setIsModelOpen ] = useState(false);

  const openModel = () => setIsModelOpen(true);
  const closeModel = () => setIsModelOpen(false); 

  return (
    <div className="App app">
      <h1> Reusable overlay component </h1>
      <button onClick={openModel}> Open Model </button>
      <Model isOpen={isModelOpen} onClose={closeModel}>
        <h2>Model Title from App.js</h2>
        <p> Content for the Model </p>
        <button onClick={closeModel}>Close Model</button>
      </Model>
    </div>
  );
}

export default App;
