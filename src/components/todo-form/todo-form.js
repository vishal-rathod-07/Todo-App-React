import { useState } from "react";

import "./todo-form.css";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value.trim());
    setValue("");
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-form__input'
        placeholder='Add a task...'
        title='Enter your task here.'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        autoFocus
      />
      <button title="Press 'Enter' to add a task" className='todo-form__button'>
        +
      </button>
    </form>
  );
};

export default TodoForm;
