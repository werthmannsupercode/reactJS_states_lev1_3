import { useState } from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>COUNTER</h1>
      <div className="innerContainer">
        <button onClick={() => setNumber(number + 1)}>+</button>
        <p>{number}</p>
        <button onClick={() => setNumber(number - 1)}>-</button>
      </div>
      <button onClick={() => setNumber(number - number)}>reset</button>
    </div>
  );
}

export default App;
