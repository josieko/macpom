import React, { useState } from "react";
import styled, { css } from "styled-components";

const TaskList = ({ isActive }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <TaskSection>
      <FormContainer isActive={isActive} onSubmit={addTask}>
        <Input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Track a new task"
          $primary={isActive}
        />
        <Button $primary={isActive} type="submit">
          Add
        </Button>
      </FormContainer>
      <Ul>
        {tasks.map((task, index) => (
          <Li $primary={isActive} key={index}>
            {task}
          </Li>
        ))}
      </Ul>
    </TaskSection>
  );
};

const TaskSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.form`
  display: flex;
  transition: opacity 0.7s ease, transform 0.7s ease;
  opacity: ${(props) => (props.isActive ? 0 : 1)};
  transform: ${(props) =>
    props.isActive ? "translateY(-20px)" : "translateY(0)"};
  pointer-events: ${(props) => (props.isActive ? "none" : "auto")};
`;

const Button = styled.button`
  background: transparent;
  border-radius: 12px;
  border: 0px solid #a6c3ce;
  background: #a6c3ce;
  padding: 12px 24px;
  font-family: "Oswald", sans-serif;
  color: white;
  transition: background 0.7s ease, border 0.5s ease;

  ${(props) =>
    props.$primary &&
    css`
      background: #91ac9a;
      border: 0px solid #91ac9a;
    `};
`;

const Input = styled.input`
  background: transparent;
  border-radius: 12px;
  border: 2px solid #a6c3ce;
  margin-right: 8px;
  padding: 12px;
  width: 280px;
  font-family: "Oswald", sans-serif;
  transition: background 0.7s ease, border 0.5s ease;

  ${(props) =>
    props.$primary &&
    css`
      background: transparent;
      border: transparent;
      color: transparent;
    `};
`;

const Ul = styled.ul`
  padding: 8px;
  margin-top: 22px;
`;

const Li = styled.li`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
  color: #939393;
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  list-style-type: none;
  text-align: left;
  transition: color 0.7s ease;

  ${(props) =>
    props.$primary &&
    css`
      color: white;
    `}
`;

export default TaskList;
