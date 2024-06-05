import React, { Component } from "react";
import styled from "styled-components";

class AddTask extends Component {
  inputRef = React.createRef();

  render() {
    const { addNewTask } = this.props;

    return (
      <TaskForm onSubmit={(e) => addNewTask(e, this.inputRef.current.value)}>
        <TaskInput
          ref={this.inputRef}
          type="text"
          name="taskName"
          placeholder="What are you working on?"
        />
        <SubmitButton type="submit">＋</SubmitButton>
      </TaskForm>
    );
  }
}

const TaskForm = styled.form`
  display: flex;
  align-items: center;
`;

const TaskInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default AddTask;
