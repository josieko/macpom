import React, { Component } from "react";
import Tomatoes from "./Tomatoes";

class CurrentTask extends Component {
  render() {
    const { taskName, countdownText, tomatoes, toggleComplete, isCompleted } =
      this.props;
    const defaultTask = taskName ? taskName : " ";
    const completedStatus = isCompleted ? "is-completed" : "";

    return (
      <div className={`current-task ${completedStatus}`}>
        <div className="current-task__head">
          <div className="current-task__checkbox">
            <input type="checkbox" id="complete" onChange={toggleComplete} />
            <label htmlFor="complete" />
          </div>
          <div className="current-task__content-wrapper">
            <h2 className="current-task__name">{defaultTask}</h2>
            <div className="current-task__tomatoes">
              {Array(tomatoes)
                .fill("X")
                .map((i) => (
                  <Tomatoes key={i} />
                ))}
            </div>
          </div>
        </div>
        <div className="current-task__highlight">
          <mark className="current-task__countdown">{countdownText}</mark>
        </div>
      </div>
    );
  }
}

export default CurrentTask;
