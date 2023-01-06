import { useState, useEffect, useRef, useContext } from "react";
import { GlobalContext } from "../context/Provider";

export default function useTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const { elapsedTime, setElapsedTime } = useContext(GlobalContext);
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
    setIsRunning,
    isPaused,
    setIsPaused,
    elapsedTime,
    setElapsedTime,
    handlePause,
    handleStart,
    handleTime,
  };
}
