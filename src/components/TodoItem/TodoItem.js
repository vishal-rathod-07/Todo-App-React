import "./todoitem.css";

const TodoItem = ({ todo, completeTodo, removeTodo }) => {
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
      <label
        htmlFor={todo.id}
        className='todo-item__label'
        title={todo.isCompleted ? "Mark as incomplete" : "Mark as complete"}
      >
        {todo.text}
      </label>
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
