import React from "react";
import styled from "styled-components";
import Tomatoes from "./Tomatoes";

const CurrentTask = ({
  taskName,
  countdownText,
  tomatoes,
  toggleComplete,
  isCompleted,
}) => {
  const defaultTask = taskName || " ";
  const completedStatus = isCompleted ? "is-completed" : "";

  return (
    <TaskContainer className={completedStatus}>
      <TaskHead>
        <CheckboxContainer>
          <Checkbox type="checkbox" id="complete" onChange={toggleComplete} />
          <CheckboxLabel htmlFor="complete" />
        </CheckboxContainer>
        <ContentWrapper>
          <TaskName>{defaultTask}</TaskName>
          <TomatoesContainer>
            {Array(tomatoes)
              .fill("X")
              .map((_, i) => (
                <Tomatoes key={i} />
              ))}
          </TomatoesContainer>
        </ContentWrapper>
      </TaskHead>
      <Highlight>
        <Countdown>{countdownText}</Countdown>
      </Highlight>
    </TaskContainer>
  );
};

const TaskContainer = styled.div`
  &.is-completed {
    text-decoration: line-through;
    opacity: 0.5;
  }
`;

const TaskHead = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskName = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const TomatoesContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

const Highlight = styled.div`
  margin-top: 10px;
`;

const Countdown = styled.mark`
  background: none;
  font-size: 1.25rem;
`;

export default CurrentTask;
