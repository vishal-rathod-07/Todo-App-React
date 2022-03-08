import { useState } from "react";

import "./todoitem.css";

const TodoItem = ({ todo, completeTodo, editTodo, removeTodo }) => {
  const [value, setValue] = useState(todo.text);

  const handleChange = (e) => {
    setValue(e.target.value);
    editTodo(todo.id, e.target.value);
  };

  const handleKey = (e) => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      e.target.blur();
    }
  };

  return (
    <li className='todo-item' key={todo.id}>
      <input
        id={todo.id}
        type='checkbox'
        className='todo-item__checkbox'
        title={todo.isCompleted ? "Mark as incomplete" : "Mark as complete"}
        checked={todo.isCompleted}
        onChange={() => completeTodo(todo.id)}
      />

      <input
        type='text'
        className='todo-item__input'
        title='Click to edit task'
        value={value}
        onChange={handleChange}
        onKeyDown={handleKey}
        tabIndex='-1'
      />

      <button
        className='todo-item__button'
        title='Remove Task From List'
        onClick={() => removeTodo(todo.id)}
      >
        &#x2715;
      </button>
    </li>
  );
};

export default TodoItem;
