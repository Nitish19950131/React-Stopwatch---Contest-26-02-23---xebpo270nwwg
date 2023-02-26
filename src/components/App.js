import React, { useRef, useState } from 'react'
import '../styles/App.css';
const App = () => {
  const startTime = useRef(0);
  const intervalRef = useRef(0);
  const [time,setTime]= useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const handleStart=()=>{
    setTime(Date.now());
    setCurrentTime(Date.now());

    intervalRef.current= setInterval(()=>{
      setTime(Date.now());
    },10);

  }

  const handleStop=()=>{
   clearInterval(intervalRef.current);

  }
 

  let timePassed= (time-currentTime)/1000;
  const handleReset=()=>{
    setCurrentTime(time);

    
  }

  const handleLap=()=>{

  }

  return (
    <div id="main">
      <section>
        <h1 className='seconds-elapsed'>Stopwatch Time </h1>
        <h2> timer: {timePassed.toFixed(3)}</h2>
       
        <section className='buttons'>
          <button className="start-btn" onClick={handleStart}>START</button>
          <button className="stop-btn" onClick={handleStop}>STOP</button>
          <button className="lap-btn" onClick={handleLap}>LAP</button>
          <button className="reset-btn" onClick={handleReset}>RESET</button>
        </section>
      </section>
      <section className='lap-section'>
        <h2>Laps</h2>
        <section className='laps'>
          <p>lap</p>
          <p>lap</p>
          <p>lap</p>
        </section>
      </section>
    </div>
  )
}


export default App;
