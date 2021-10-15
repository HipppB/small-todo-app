import React, { useState } from "react";

//Components
import TodoList from "./TodoList";

import "./Todo.css";
import data from "./data.json";

export default function TodoApp() {
  const [toDoList, setToDoList] = useState(data);
  const [newTaskValue, setNewTaskValue] = useState("");
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };
  const handleToggleDelete = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id ? { ...task, deleted: !task.deleted } : { ...task };
    });
    setToDoList(mapped);
  };
  const handleChange = (id, value) => {
    let mapped = toDoList.map((task) => {
      return task.id == id ? { ...task, task: value } : { ...task };
    });
    setToDoList(mapped);
    console.log(toDoList);
  };

  const addNewTask = (value) => {
    let newTask = {
      id: toDoList.length + 1,
      task: value,
      complete: false,
      deleted: false,
    };
    let mapped = [...toDoList, newTask];
    setToDoList(mapped);
  };
  const submitNew = (event) => {
    event.preventDefault();
    addNewTask(newTaskValue);
    setNewTaskValue("");
  };
  return (
    <body>
      <h1>To Do List</h1>
      <TodoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleChange={handleChange}
        handleToggleDelete={handleToggleDelete}
      />
      <form onSubmit={(e) => submitNew(e)}>
        <input
          type="text"
          value={newTaskValue}
          onChange={(e) => setNewTaskValue(e.target.value)}
        ></input>
        <button>Ajouter</button>
      </form>
    </body>
  );
}
