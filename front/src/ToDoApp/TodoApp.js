import React, { useEffect, useState } from "react";

//Components
import TodoList from "./TodoList";
import getItems from "../data/getItems";
import "./Todo.css";
import apirequest from "../data/apirequest";
export default function TodoApp() {
  // Loading Data in state
  const [toDoList, setToDoList] = useState([]);
  useEffect(() => getItems().then((data) => setToDoList(data)), []);

  // Input for new task
  const [newTaskValue, setNewTaskValue] = useState("");

  //Actions on Data

  //Toggle task
  const handleToggle = (id) => {
    const toggledElement = apirequest({
      link: "/complete/" + id,
      method: "GET",
    });

    let mapped = toDoList.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  //Delete Task (Data is nether really deleted, only display)
  const handleToggleDelete = (id) => {
    const toggledElement = apirequest({
      link: "/delete/" + id,
      method: "GET",
    });
    let mapped = toDoList.map((task) => {
      return task.id === id ? { ...task, deleted: !task.deleted } : { ...task };
    });
    setToDoList(mapped);
  };

  //Handle Change of task
  const handleChange = (id, value) => {
    const toggledElement = apirequest({
      link: "/" + id,
      method: "PUT",
      rawData: { task: value },
    });
    let mapped = toDoList.map((task) => {
      return task.id === id ? { ...task, task: value } : { ...task };
    });
    setToDoList(mapped);
  };

  //New task
  const addNewTask = (value) => {
    const newelement = apirequest({
      link: "/",
      method: "POST",
      rawData: { task: value },
    }).then((task) => {
      let mapped = [...toDoList, task];
      setToDoList(mapped);
    });
  };

  //Handle submit of form
  const submitNew = (event) => {
    event.preventDefault();
    addNewTask(newTaskValue);
    setNewTaskValue("");
  };
  return (
    <body>
      <h1>Shopping List</h1>
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
