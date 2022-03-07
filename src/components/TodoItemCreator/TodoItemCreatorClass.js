import React from "react";

import "./todoitemcreator.css";

class TodoItemCreatorClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.value.trim()) return;
    this.props.addTodo(this.state.value.trim());
    this.setState({ value: "" });
  };

  render() {
    return (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          className='todo-form__input'
          placeholder='Add a task...'
          title='Enter your task here.'
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
          required
          autoFocus
        />
        <button
          title="Press 'Enter' to add a task"
          className='todo-form__button'
        >
          +
        </button>
      </form>
    );
  }
}

export default TodoItemCreatorClass;
