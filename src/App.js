// App.js
import React, { useState } from "react";
import styled from "styled-components";
import ControlButtons from "./component/ControlButtons";
import TaskList from "./component/TaskList";
import Timer from "./component/Timer";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [key, setKey] = useState(0);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleBreak = () => setIsBreak(!isBreak);

  const handleSessionComplete = () => {
    setIsActive(false);
    setIsBreak(!isBreak);
  };

  const handleRefresh = () => {
    setIsActive(false);
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <PomoContainer isActive={isActive}>
      <TaskList isActive={isActive} />
      <Timer
        key={key}
        isActive={isActive}
        isBreak={isBreak}
        onSessionComplete={handleSessionComplete}
      />
      <ControlButtons
        isActive={isActive}
        isBreak={isBreak}
        onStart={handleStart}
        onPause={handlePause}
        onBreak={handleBreak}
        onRefresh={handleRefresh}
      />
    </PomoContainer>
  );
}

const PomoContainer = styled.div`
  background-color: ${(props) => (props.isActive ? "#b2ccbb" : "#F8F7F7 ")};
  border-radius: ${(props) => (props.isActive ? "32px" : "40px")};
  margin: 22px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 840px;
  min-height: 660px;
  transition: background-color 2.3s ease, border-radius 0.5s ease;
`;
