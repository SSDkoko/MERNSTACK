import './App.css';
import React, { useState } from 'react';

import Form from './components/Form';
import Display from './components/Display';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [boxColorArray, setBoxColorArray] = useState([]);
  const [boxArray, setBoxArray] = useState([]);

  return (
    <div className="App">
      <Form boxColorArray={boxColorArray} setBoxColorArray={setBoxColorArray} />
      <Display boxColorArray={boxColorArray} />
      <hr />

    </div>
  );
}

export default App;

