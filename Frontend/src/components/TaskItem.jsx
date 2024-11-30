import React from "react";

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded px-6 py-4 mb-4 flex justify-between items-center">
      <div>
        <h3 className="font-bold text-lg">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <p className="text-sm text-gray-600">Due: {task.dueDate}</p>
        <p
          className={`text-sm ${
            task.status === "Completed" ? "text-green-600" : "text-yellow-600"
          }`}
        >
          Status: {task.status}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-700"
          onClick={() => onEdit(task._id, { ...task, status: "Completed" })}
        >
          Complete
        </button>
        <button
          className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-700"
          onClick={() => onDelete(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
