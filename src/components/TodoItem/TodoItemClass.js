import React from "react";

import "./todoitem.css";

class TodoItemClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.editTodo(this.props.todo.id, e.target.value);
  };

  render() {
    return (
      <li className='todo-item' key={this.props.todo.id}>
        <input
          id={this.props.todo.id}
          type='checkbox'
          className='todo-item__checkbox'
          title={
            this.props.todo.isCompleted
              ? "Mark as incomplete"
              : "Mark as complete"
          }
          checked={this.props.todo.isCompleted}
          onChange={() => this.props.completeTodo(this.props.todo.id)}
        />
        <input
          className='todo-item__label'
          title='Click to edit task'
          value={this.props.todo.text}
          onChange={this.handleChange}
        />
        <button
          className='todo-item__button'
          title='Remove Task From List'
          onClick={() => this.props.removeTodo(this.props.todo.id)}
        >
          &#x2715;
        </button>
      </li>
    );
  }
}

export default TodoItemClass;
