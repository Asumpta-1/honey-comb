import React from "react";
import ListItems from "./ListItems";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [inputTask, setInputTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleInputTask(e) {
    setInputTask(e.target.value);
  }
  function handleTaskList() {
    const newTask = {
      id: uuidv4(),
      text: inputTask,
    };
    setTaskList([...taskList, newTask]);
    setInputTask("");
  }
  function handleDeleteTask(id) {
    const updatedList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedList);
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleTaskList();
    }
  }

  return (
    <div className="todo-list">
      <h1>To-do List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add new task"
          value={inputTask}
          onChange={handleInputTask}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleTaskList}>Add</button>
      </div>
      <ListItems taskList={taskList} deleteItem={handleDeleteTask} />
    </div>
  );
}

export default TodoList;
