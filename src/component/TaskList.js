import React, { useState } from 'react';
import styled from 'styled-components';

const TaskList = () => {
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
    <div className="task-list">
      <form onSubmit={addTask}>
        <Input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
        />
        <Button type="submit">Add Task</Button> 
      </form>
      <ul>
        {tasks.map((task, index) => (
          <Li key={index}>{task}</Li> 
        ))}
      </ul>
    </div>
  );
};

const Button = styled.button` 
  background: transparent;
  border-radius: 12px;
  border: 3px solid white;
  margin: 8px;
  padding: 12px;
`;

const Input = styled.input`
  background: transparent;
  border-radius: 12px;
  border: 3px solid white;
  margin: 8px;
  padding: 12px;
`;

const Li = styled.li`
  color: white; 
  font-size: 24px;
`;
export default TaskList;