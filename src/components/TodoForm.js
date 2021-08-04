import React from "react";

class ToDoForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="What it do?" />
        <button>Add</button>
      </form>
    );
  }
}

export default ToDoForm;
