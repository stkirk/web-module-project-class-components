import React from "react";

class ToDo extends React.Component {
  render() {
    return (
      <div
        className={`todo ${this.props.todo.done ? "done" : ""}`}
        onClick={() => this.props.toggleDone(this.props.todo.id)}
      >
        <p>{this.props.todo.name}</p>
      </div>
    );
  }
}

export default ToDo;
