import React from "react";

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoTask: "",
    };
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    //pass todoTask from input field upstream to App
    this.props.addTodo(this.state.todoTask);
    //clear input field
    this.setState({
      ...this.state,
      todoTask: "",
    });
  };

  handleChange = (evt) => {
    // console.log("input change", evt.target.value);
    this.setState({
      ...this.state,
      todoTask: evt.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="What it do?"
          value={this.state.todoTask}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ToDoForm;
