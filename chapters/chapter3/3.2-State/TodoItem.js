import React from "react";

function TodoItem(props) {
  return (
    <div className="todo_item">
      <input type="checkbox" checked={props.item.isCompleted} />
      <p> {props.item.name} </p>
    </div>
  );
}

export default TodoItem;
