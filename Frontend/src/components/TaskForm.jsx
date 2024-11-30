import React, { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({ title: "", description: "", dueDate: "", status: "Pending" });
  };

  return (
    <>
      <div>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <input
            className="border border-gray-300 rounded w-full py-2 px-4 mb-4"
            type="text"
            name="title"
            placeholder="Task Title"
            value={task.title}
            onChange={handleChange}
            required
          />
          <textarea
            className="border border-gray-300 rounded w-full py-2 px-4 mb-4"
            name="description"
            placeholder="Task Description"
            value={task.description}
            onChange={handleChange}
          />
          <input
            className="border border-gray-300 rounded w-full py-2 px-4 mb-4"
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
          />
          <select
            className="border border-gray-300 rounded w-full py-2 px-4 mb-4"
            name="status"
            value={task.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700"
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
