import React from "react";
import TodoItemCreatorClass from "../TodoItemCreator/TodoItemCreatorClass";
import TodoItemClass from "../TodoItem/TodoItemClass";

import "./todomain.css";

class TodoMainClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.setState({ todos });
  }

  addTodo = (text) => {
    if (text !== "") {
      const newTodos = [
        ...this.state.todos,
        { id: Date.now(), text: text, isCompleted: false },
      ];
      this.setState({ todos: newTodos });
      this.addToLocalStorage(newTodos);
    }
  };

  addToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  completeTodo = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
    this.addToLocalStorage(newTodos);
  };

  editTodo = (id, text) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: text };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
    this.addToLocalStorage(newTodos);
  };

  removeTodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
    this.addToLocalStorage(newTodos);
  };

  render() {
    return (
      <div className='container'>
        <TodoItemCreatorClass addTodo={this.addTodo} />

        <ul className='todos'>
          {this.state.todos.map((todo) => (
            <TodoItemClass
              key={todo.id}
              todo={todo}
              completeTodo={this.completeTodo}
              removeTodo={this.removeTodo}
              editTodo={this.editTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoMainClass;
