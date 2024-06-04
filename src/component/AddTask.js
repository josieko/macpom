import React, { Component } from "react";

class AddTask extends Component {
  inputRef = React.createRef();

  render() {
    const { addNewTask } = this.props;

    return (
      <form
        className="add-task"
        onSubmit={(e) => addNewTask(e, this.inputRef.current.value)}
      >
        <input
          ref={this.inputRef}
          type="text"
          name="taskName"
          className="add-task__input"
          placeholder="What are you working on?"
        />
        <button className="add-task__submit">＋</button>
      </form>
    );
  }
}

export default AddTask;
