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

  handleKey = (e) => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      e.target.blur();
    }
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
          type='text'
          className='todo-item__input'
          title='Click to edit task'
          value={this.props.todo.text}
          onChange={this.handleChange}
          onKeyDown={this.handleKey}
          tabIndex='-1'
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
