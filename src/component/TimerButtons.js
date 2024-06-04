import React from "react";

const TimerButtons = (props) => {
  const { isWorking, isPlaying, startTimer, stopTimer } = props;
  const workingStatus = isWorking ? "#FF4384" : "#00A7FF";

  return (
    <>
      {isPlaying ? (
        <button
          className="timer__pause-btn"
          title="Pause the timer"
          onClick={() => stopTimer()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 510 510"
          >
            <path
              fill={workingStatus}
              d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm-25.5 357h-51V153h51v204zm102 0h-51V153h51v204z"
            />
          </svg>
        </button>
      ) : (
        <button
          className="timer__play-btn"
          title="Play the timer"
          onClick={() => startTimer()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 58 58"
          >
            <path d="M44 29L22 44V14z" style={{ fill: workingStatus }} />
            <path
              d="M22 45a.999.999 0 0 1-1-1V14a.999.999 0 0 1 1.564-.826l22 15a1.001 1.001 0 0 1-.001 1.652l-22 15A1.002 1.002 0 0 1 22 45zm1-29.107v26.215L42.225 29 23 15.893z"
              style={{ fill: workingStatus }}
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default TimerButtons;
