import React from "react";

//import components
import ToDoList from "./components/TodoList";
import ToDoForm from "./components/TodoForm";

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
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <ToDoForm />
        </div>
        <ToDoList />
      </div>
    );
  }
}

export default App;
