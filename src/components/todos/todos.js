import { useState } from "react";

import TodoForm from "../todo-form/todo-form";
import TodoItem from "../todo-item/todo-item";
import "./todos.css";

const Todos = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [
      { id: 1, text: "Buy some stuff", isCompleted: true },
      { id: 2, text: "Read the book", isCompleted: false },
      { id: 3, text: "Play a game", isCompleted: false },
    ]
  );

  const addTodo = (text) => {
    if (text !== "") {
      const newTodos = [
        ...todos,
        { id: Date.now(), text: text, isCompleted: false },
      ];
      setTodos(newTodos);
      addToLocalStorage(newTodos);
      // console.table(newTodos);
    }
  };

  const addToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
    addToLocalStorage(newTodos);
    // console.table(newTodos);
  };

  const removeTodo = (id) => {
    // console.table(id);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    addToLocalStorage(newTodos);
    // console.table(newTodos);
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <ul className='todos'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default Todos;
