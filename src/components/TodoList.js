import React from "react";
import ToDo from "./Todo";

class ToDoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        {this.props.todos.map((todo) => {
          return (
            <ToDo
              key={todo.id}
              todo={todo}
              toggleDone={this.props.toggleDone}
            />
          );
        })}

        <button className="clear-btn">Clear Finished</button>
      </div>
    );
  }
}

export default ToDoList;
