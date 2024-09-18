import React, { useMemo } from "react";

function TaskList({ tasks, filter, dispatch }) {
  const filteredTasks = useMemo(() => {
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else if (filter === "pending") {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  }, [tasks, filter]);

  const toggleTaskStatus = (id) => {
    const taskToToggle = tasks.find((task) => task.id === id);
    dispatch({
      type: "UPDATE_TASK",
      payload: {
        id,
        data: {
          completed: !taskToToggle.completed,
        },
      },
    });
  };

  return (
    <ul className="list">
      {filteredTasks.map((task) => (
        <li
          key={task.id}
          className="task-item flex items-center justify-between"
        >
          <span
            className={`task-name ${
              task.completed ? "line-through text-gray-500" : "text-gray-900"
            } cursor-pointer`}
            onClick={() => toggleTaskStatus(task.id)}
          >
            {task.name}
          </span>
          <button
            className="delete text-red-500 hover:text-red-700  px-2 py-1 rounded-md focus:outline-none"
            onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
