import { useState } from "react";

import TodoItemCreator from "../TodoItemCreator/TodoItemCreator";
import TodoItem from "../TodoItem/TodoItem";
import "./todomain.css";

const TodoMain = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
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
    <div className='container'>
      <TodoItemCreator addTodo={addTodo} />
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
    </div>
  );
};

export default TodoMain;
