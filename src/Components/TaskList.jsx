import React from "react";
import Task from "./Task";

const TaskList = ({ title, tasks, onDelete, onUpdate }) => {
  const titleClassName = getTitleClassName(title);

  return (
    <div className="border rounded-t bg-white">
      <div
        className={`w-full border rounded-t h-8 text-xl font-bold mb-3 text-center ${titleClassName}`}
      >
        <h2>{title}</h2>
      </div>
      <div className="p-2">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
};

// Function to determine the background color based on the title
const getTitleClassName = (title) => {
  switch (title) {
    case "Pending":
      return "bg-blue-500";
    case "In Progress":
      return "bg-yellow-500";
    case "Completed":
      return "bg-green-500";
    case "Deployed":
      return "bg-purple-500";
    case "Deferred":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

export default TaskList;
