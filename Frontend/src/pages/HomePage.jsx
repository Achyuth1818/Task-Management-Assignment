import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { fetchTasks, createTask, updateTask, deleteTask } from "../api/api";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks when the component mounts
  useEffect(() => {
    const loadTasks = async () => {
      const { data } = await fetchTasks();
      setTasks(data);
    };
    loadTasks();
  }, []);

  // Handle adding a new task
  const handleAddTask = async (task) => {
    const { data } = await createTask(task);
    setTasks([...tasks, data]);
  };

  // Handle editing a task
  const handleEditTask = async (id, updatedTask) => {
    const { data } = await updateTask(id, updatedTask);
    setTasks(tasks.map((task) => (task._id === id ? data : task)));
  };

  // Handle deleting a task
  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 pt-20 p-4 flex flex-col items-center">
        <TaskForm onSubmit={handleAddTask} />
        <TaskList
          tasks={tasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
      </div>
    </>
  );
};

export default HomePage;
