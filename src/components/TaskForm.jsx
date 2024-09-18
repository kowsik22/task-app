import React, { useState, useRef, useCallback } from "react";

function TaskForm({ dispatch }) {
  const [taskName, setTaskName] = useState("");
  const inputRef = useRef(null);

  const addTask = useCallback(() => {
    if (taskName.trim()) {
      dispatch({
        type: "ADD_TASK",
        payload: { id: Date.now(), name: taskName, completed: false },
      });
      setTaskName("");
      inputRef.current.focus();
    }
  }, [taskName, dispatch]);

  return (
    <div className="input">
      <input
        ref={inputRef}
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskForm;
