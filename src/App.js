import React from "react";

//import components
import ToDoList from "./components/TodoList";
import ToDoForm from "./components/TodoForm";

//dummy data
// const todos = [
//   {
//     task: "laundry",
//     id: 123,
//     completed: false,
//   },
//   {
//     task: "groceries",
//     id: 1234,
//     completed: false,
//   },
// ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  //Change Handlers

  toggleDone = (todoId) => {
    console.log("Toggling completed todo");

    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      } else return todo;
    });
    console.log("UpdatedTodos", updatedTodos);

    this.setState({ ...this.state, todos: updatedTodos });
  };

  addTodo = (todoTask) => {
    console.log("Adding new item");
    //make new todo object
    const newTodo = {
      task: todoTask,
      id: Date.now(),
      completed: false,
    };
    //todoTask passed up from TodoForm input value
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    });
  };

  clearTodo = () => {
    console.log("Clearing...");

    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return !todo.completed;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <ToDoForm addTodo={this.addTodo} />
        </div>
        <ToDoList
          todos={this.state.todos}
          toggleDone={this.toggleDone}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
