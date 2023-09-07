import React from "react";
import '../style/todoitem.css'

const TodoItem = ({
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
  id,
}) => {
  return (
    <div className="todo">
      <div className="todo1">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="todo2">
        <input
          onChange={() => updateHandler(id)}
          type="checkbox"
          checked={isCompleted}
        />
        <button onClick={() => deleteHandler(id)} className="btn">
          -
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
