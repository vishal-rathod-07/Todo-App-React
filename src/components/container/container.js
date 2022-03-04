import Todos from "../todos/todos";

import "./container.css";

const Container = () => {
  return (
    <div className='container'>
      <h1 className='container__title'>Todo List</h1>
      <Todos />
    </div>
  );
};
export default Container;
