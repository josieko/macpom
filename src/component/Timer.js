import React, { Component } from "react";
import styled from "styled-components";
import TimerButtons from "./TimerButtons";

class Timer extends Component {
  render() {
    const {
      ringtoneRef,
      isWorking,
      isPlaying,
      startTimer,
      stopTimer,
      resetTimer,
    } = this.props;

    return (
      <TimerContainer>
        <audio ref={ringtoneRef} className="timer__ringtone">
          <source src="" />
        </audio>

        <ControlButtonsContainer>
          <TimerButtons
            isWorking={isWorking}
            isPlaying={isPlaying}
            startTimer={startTimer}
            stopTimer={stopTimer}
          />
        </ControlButtonsContainer>

        <ResetButtonContainer>
          <ResetButton
            title="Click to reset the timer"
            onClick={() => resetTimer()}
          >
            Reset
          </ResetButton>
        </ResetButtonContainer>
      </TimerContainer>
    );
  }
}

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ControlButtonsContainer = styled.div`
  margin: 20px 0;
`;

const ResetButtonContainer = styled.div`
  margin-top: 10px;
`;

const ResetButton = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export default Timer;
