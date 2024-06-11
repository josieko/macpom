import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

export default function Timer({ isActive, isBreak, onSessionComplete }) {
  const [time, setTime] = useState(1500); 

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(interval);
            onSessionComplete();
            return isBreak ? 300 : 1500;
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
    <Div>
      <P $isActive={isActive}>{formatTime(time)}</P>
    </Div>
  );
};

const P = styled.p` 
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
  font-family: 'Osward', sans-serif;
  font-weight: 900;
  color: #d3d3d3;
  font-size: 282px;

  ${(props) => 
    props.$isActive && 
    css `
      color: white;
      `};
`;

const Div = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 460px;
`;
