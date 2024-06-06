// Timer.js
import React, { useState, useEffect } from "react";

const Timer = ({ isActive, isBreak, onSessionComplete }) => {
  const [time, setTime] = useState(1500); // 25 minutes in seconds

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(interval);
            onSessionComplete();
            return isBreak ? 300 : 1500; // switch between break (5 min) and session (25 min)
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isBreak, onSessionComplete]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="timer">
      <h1>{formatTime(time)}</h1>
    </div>
  );
};

export default Timer;
