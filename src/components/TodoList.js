import React from "react";
import ToDo from "./Todo";

class ToDoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <ToDo />
        <button className="clear-btn">Clear Finished</button>
      </div>
    );
  }
}

export default ToDoList;
