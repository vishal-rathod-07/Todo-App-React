import Todos from "../todos/todos";

import "./container.css";

const Container = () => {
  return (
    <div className='container'>
      <h1 className='container__title'>Todo App</h1>
      <Todos />
    </div>
  );
};
export default Container;
