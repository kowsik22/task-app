import React from "react";

function TaskFilter({ filter, setFilter }) {
  return (
    <div className="one flex gap-2">
      <button
        className={`filter-button ${filter === "all" ? "active" : ""}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`filter-button ${filter === "completed" ? "active" : ""}`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className={`filter-button ${filter === "pending" ? "active" : ""}`}
        onClick={() => setFilter("pending")}
      >
        Pending
      </button>
    </div>
  );
}

export default TaskFilter;
