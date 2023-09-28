import React from "react";

function ListItems({ taskList, deleteItem }) {
  return (
    <ul className="task-list">
      {taskList.map((task) => (
        <li key={task.id}>
          {task.text}
          <input type="checkbox" />
          <button onClick={() => deleteItem(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ListItems;
