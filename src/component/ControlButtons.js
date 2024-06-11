import React, { useState } from "react";
import { PauseOutline, RefreshOutline } from "react-ionicons";
import styled, { css } from "styled-components";

export default function ControlButtons({ onStart, onPause, onBreak }) {
  const [isOn, setIsOn] = useState(false);

  const buttonClick = () => {
    setIsOn(!isOn);
    if (!isOn) {
      onStart();
    } else {
      onPause();
    }
  };
  const buttonTxt = () => {
    if (isOn) {
      return (
        <>
          <PauseOutline color={"#00000"} height="28px" width="28px" />
          <RefreshOutline color={"#00000"} height="28px" width="28px" />
        </>
      );
    } else {
      return "Start";
    }
  };
  return (
    <div>
      {isOn ? (
        <>
          <Button $primary={isOn} onClick={buttonClick}>
            <ButtonText $primary={isOn}>
              <PauseOutline color={"#00000"} height="28px" width="28px" />
            </ButtonText>
          </Button>
          <Button $primary={isOn} onClick={buttonClick}>
            <ButtonText $primary={isOn}>
              <RefreshOutline color={"#00000"} height="28px" width="28px" />
            </ButtonText>
          </Button>
        </>
      ) : (
        <Button $primary={isOn} onClick={buttonClick}>
          <ButtonText $primary={isOn}>{buttonTxt()}</ButtonText>
        </Button>
      )}
    </div>
  );
}

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

  ${(props) =>
    props.$primary &&
    css`
      background: #91ac9a;
      border: 3px solid #91ac9a;
    `};
`;

const ButtonText = styled.span`
  color: ${(props) => (props.$primary ? "#CEDFDF" : "white")};
  font-weight: bold;
  font-size: 24px;
`;
