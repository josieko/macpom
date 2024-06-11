// App.js
import React, { useState } from "react";
import styled from "styled-components";
import ControlButtons from "./component/ControlButtons";
import TaskList from "./component/TaskList";
import Timer from "./component/Timer";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleBreak = () => setIsBreak(!isBreak);

  const handleSessionComplete = () => {
    setIsActive(false);
    setIsBreak(!isBreak);
  };

  return (
    <PomoContainer isActive={isActive}>
      <TaskList />
      <Timer
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
      />
    </PomoContainer>
  );
}

const PomoContainer = styled.div`
  background-color: ${(props) => (props.isActive ? "#CEDFDF" : "#ececec")};
  border-radius: ${(props) => (props.isActive ? "32px" : "40px")};
  margin: 22px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 840px;
`;
