import React, { useState } from "react";
import styled, { css } from "styled-components";

const TaskList = ({ isOn }) => {
  const [tasks, setTasks] = useState([]); // Added missing useState for tasks
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
      <form onSubmit={addTask}>
        <Input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Track a new task"
        />
        <Button $primary={isOn} type="submit">
          Add
        </Button>
      </form>
      <Ul>
        {tasks.map((task, index) => (
          <Li key={index}>{task}</Li>
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

const Button = styled.button`
  background: transparent;
  border-radius: 12px;
  border: 0px solid #a6c3ce;
  background: #a6c3ce;
  padding: 12px 24px;
  font-faminly: "Oswald", sans-serif;
  color: white;

  ${(props) =>
    props.$primary &&
    css`
      background: #91ac9a;
      border: 3px solid #91ac9a;
    `};
`;

const Input = styled.input`
  background: transparent;
  border-radius: 12px;
  border: 2px solid #a6c3ce;
  margin-right: 8px;
  padding: 12px;
  width: 280px;
  font-faminly: "Oswald", sans-serif;
`;

const Ul = styled.ul`
  padding: 8px;
  margin-top: 22px;
`;

const Li = styled.li`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
  color: white;
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  list-style-type: none;
  text-align: right;
`;
export default TaskList;
