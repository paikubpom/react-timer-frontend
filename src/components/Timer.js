import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartStop = () => setIsRunning(!isRunning);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}.${centiseconds < 10 ? "0" : ""}${centiseconds}`;
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-5">Time: {formatTime(time)}</h1>
      <button 
        className={`px-4 py-2 shadow-md rounded text-white mr-2 ${isRunning ? "bg-red-500" : "bg-green-500"}`} 
        onClick={handleStartStop}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button 
        className="bg-blue-500 px-4 py-2 shadow-md rounded text-white" 
        onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Timer;
