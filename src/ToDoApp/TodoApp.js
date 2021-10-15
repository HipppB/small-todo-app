import React, { useState } from "react";

//Components
import TodoList from "./TodoList";

import "./Todo.css";
//Import Data ms-ust be replaced by API Call in the future
import data from "./data.json";

export default function TodoApp() {
  // Loading Data in state
  const [toDoList, setToDoList] = useState(data);

  // Input for new task
  const [newTaskValue, setNewTaskValue] = useState("");

  //Actions on Data

  //Toggle task
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  //Delete Task (Data is nether really deleted, only display)
  const handleToggleDelete = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === id ? { ...task, deleted: !task.deleted } : { ...task };
    });
    setToDoList(mapped);
  };

  //Handle Change of task Name
  const handleChange = (id, value) => {
    let mapped = toDoList.map((task) => {
      return task.id === id ? { ...task, task: value } : { ...task };
    });
    setToDoList(mapped);
    console.log(toDoList);
  };

  //New task
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

  //Handle submit of form
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
      <form className={"FormAddTodo"} onSubmit={(e) => submitNew(e)}>
        <input
          placeholder="Ajouter un item"
          type="text"
          value={newTaskValue}
          onChange={(e) => setNewTaskValue(e.target.value)}
        ></input>
        <button>Ajouter</button>
      </form>
    </body>
  );
}
