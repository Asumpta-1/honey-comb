import React from "react";
import ListItems from "./ListItems";

function TodoList() {
  return (
    <div className="todo-list">
      <h1>TodoList</h1>
      <div>
        <input type="text" placeholder="Add new task" />
        <button>Add</button>
      </div>
      <ListItems />
    </div>
  );
}

export default TodoList;
