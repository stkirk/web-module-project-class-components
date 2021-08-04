import React from "react";

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoName: "",
    };
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    //pass todoName from input field upstream to App
    this.props.addTodo(this.state.todoName);
    //clear input field
    this.setState({
      ...this.state,
      todoName: "",
    });
  };

  handleChange = (evt) => {
    // console.log("input change", evt.target.value);
    this.setState({
      ...this.state,
      todoName: evt.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="What it do?"
          value={this.state.todoName}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ToDoForm;
