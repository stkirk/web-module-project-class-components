import React from "react";

//import components
import ToDoList from "./components/TodoList";
import ToDoForm from "./components/TodoForm";

//dummy data
const todos = [
  {
    name: "laundry",
    id: 123,
    done: false,
  },
  {
    name: "groceries",
    id: 1234,
    done: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  //Change Handlers

  toggleDone = (todoId) => {
    console.log("Toggling done todo");

    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, done: !todo.done };
      } else return todo;
    });
    console.log("UpdatedTodos", updatedTodos);

    this.setState({ ...this.state, todos: updatedTodos });
  };

  addItem = (itemName) => {
    console.log("Adding new item");
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <ToDoForm />
        </div>
        <ToDoList todos={this.state.todos} toggleDone={this.toggleDone} />
      </div>
    );
  }
}

export default App;
