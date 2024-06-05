import React from "react";
import styled, { css } from "styled-components";

const TimerButtons = (props) => {
  const { isWorking, isPlaying, startTimer, stopTimer } = props;
  const workingStatus = isWorking ? "#FF4384" : "#00A7FF";

  return (
    <>
      {isPlaying ? (
        <PauseButton onClick={stopTimer} workingStatus={workingStatus} />
      ) : (
        <PlayButton onClick={startTimer} workingStatus={workingStatus} />
      )}
    </>
  );
};

const buttonStyles = css`
  background: none;
  border: none;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const PauseButton = styled.button`
  ${buttonStyles}
  .timer__pause-btn {
    title: "Pause the timer";
  }
  svg path {
    fill: ${(props) => props.workingStatus};
  }
`;

const PlayButton = styled.button`
  ${buttonStyles}
  .timer__play-btn {
    title: "Play the timer";
  }
  svg path {
    fill: ${(props) => props.workingStatus};
  }
`;

export default TimerButtons;
