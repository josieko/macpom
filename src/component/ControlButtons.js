import React, { useState } from "react";
import styled, { css } from "styled-components";

export default function ControlButtons({ onStart, onPause, onBreak }) {
  // Destructuring props
  const [isOn, setIsOn] = useState(false);

  const buttonClick = () => {
    setIsOn(!isOn);
    if (!isOn) {
      onStart(); // Call handleStart when button is clicked
    } else {
      onPause(); // Call handlePause when button is clicked
    }
  };
  const buttonTxt = () => {
    return isOn ? "Stop" : "Start";
  };
  return (
    <Button $primary={isOn} onClick={buttonClick}>
      <ButtonText $primary={isOn}>{buttonTxt()}</ButtonText>
    </Button>
  );
}

const Button = styled.button`
  background: transparent;
  border-radius: 12px;
  border: 3px solid #bf4f74;
  margin: 8px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.$primary &&
    css`
      background: #0f0529;
      border: 3px solid #c3b1e1;
    `};
`;

const ButtonText = styled.span`
  color: ${(props) => (props.$primary ? "#C3B1E1" : "#BF4F74")};
  font-weight: bold;
  font-size: 24px;
`;
