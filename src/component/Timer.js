import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Timer({ isActive, isBreak, onSessionComplete }) {
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
      <H1>{formatTime(time)}</H1>
    </div>
  );
};

const H1 = styled.h1` 
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
  font-family: 'Osward', sans-serif;
  font-weight: 900;
  color: white;
  font-size: 282px;
`;
