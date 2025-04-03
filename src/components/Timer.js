import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-5">Time: {time}s</h1>
      <button
        className="bg-green-500 px-4 py-2 shadow-md rounded text-white mr-2"
        onClick={handleStart}
      >
        Start
      </button>
      <button
        className="bg-red-500 px-4 py-2 shadow-md rounded text-white mr-2"
        onClick={handleStop}
      >
        Stop
      </button>
      <button
        className="bg-blue-500 px-4 py-2 shadow-md rounded text-white"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}

export default Timer;
