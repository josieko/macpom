import React, { useState } from "react";
import { PauseOutline, RefreshOutline } from "react-ionicons";
import styled, { css } from "styled-components";

export const ControlButtons = ({ onStart, onPause, onBreak, onRefresh }) => {
  const [isOn, setIsOn] = useState(false);

  const handleStartPause = () => {
    setIsOn(!isOn);
    if (!isOn) {
      onStart();
    } else {
      onPause();
    }
  };

  const handleRefresh = () => {
    setIsOn(false);
    onRefresh();
  };

  return (
    <div>
      {isOn ? (
        <>
          <Button $primary={isOn} onClick={handleStartPause}>
            <ButtonText $primary={isOn}>
              <PauseOutline color={"white"} height="28px" width="28px" />
            </ButtonText>
          </Button>
          <Button $primary={isOn} onClick={handleRefresh}>
            <ButtonText $primary={isOn}>
              <RefreshOutline color={"white"} height="28px" width="28px" />
            </ButtonText>
          </Button>
        </>
      ) : (
        <Button $primary={isOn} onClick={handleStartPause}>
          <ButtonText $primary={isOn}>Start</ButtonText>
        </Button>
      )}
    </div>
  );
};

const Button = styled.button`
  background: transparent;
  border-radius: 12px;
  border: 3px solid #8fb8ca;
  background: #8fb8ca;
  margin: 8px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.7s ease, border 0.5s ease;

  ${(props) =>
    props.$primary &&
    css`
      background: #91ac9a;
      border: 3px solid #91ac9a;
    `};
`;

const ButtonText = styled.span`
  color: ${(props) => (props.$primary ? "#CEDFDF" : "white")};
  font-weight: semi-bold;
  font-size: 24px;
`;
