import React, { useReducer, useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import "./index.css";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "UPDATE_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, ...action.payload.data }
          : task
      );
    case "INIT_TASKS":
      return action.payload;
    default:
      return state;
  }
};

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch({ type: "INIT_TASKS", payload: savedTasks });
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <div>
      <h1>Task Management App</h1>
      <TaskForm dispatch={dispatch} />
      <TaskFilter setFilter={setFilter} />
      <TaskList tasks={tasks} filter={filter} dispatch={dispatch} />
    </div>
  );
}

export default App;
