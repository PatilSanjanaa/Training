import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  
  const [number, setNumber] = useState(0);

  const [start, setStart] = useState(false);

  const [interval, SetInterval] = useState();



  const handleStart = () => {
    setStart(true);
    let current = setInterval(()=>{
      setNumber((number)=>number+1)
    }, 1000);
    SetInterval(current);
  }

  const handleStop = () => {
    SetInterval(clearInterval(interval));
    setStart(false);
  }

  const handleReset = () => {
    if(start)
    SetInterval(clearInterval(interval));
    setStart(false);
    setNumber(0);
  }





  return (
    <div className="container">
      <div className="screen">
        {number}
      </div>
      <div>
        <button className='btn' id='start' onClick={handleStart}>Start</button>
        <button className='btn' id='stop' onClick={handleStop}>Stop</button>
        <button className='btn' id='reset' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
