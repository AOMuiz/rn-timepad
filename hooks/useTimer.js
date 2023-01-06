import { useState, useEffect, useRef } from "react";

export default function useTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const countRef = useRef();

  const handleTime = () => {
    let interval;
    if (isRunning && !isPaused) {
      countRef.current = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    handleTime();
    return () => clearInterval(countRef.current);
  }, [isRunning, isPaused]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  return {
    isRunning,

    isPaused,
    setIsPaused,
    elapsedTime,
    handlePause,
    handleStart,
    handleTime,
  };
}
