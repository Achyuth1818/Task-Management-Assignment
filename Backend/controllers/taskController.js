import Task from "../models/Task.js";

// Create a new task
export const createTask = async (req, res) => {
    const { title, description, dueDate, status } = req.body;

    try {
        const task = new Task({ title, description, dueDate, status });
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: "Failed to create task", error });
    }
};

// Get all tasks
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch tasks", error });
    }
};

// Update a task
export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, dueDate, status } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, description, dueDate, status },
            { new: true }
        );
        if (!updatedTask) return res.status(404).json({ message: "Task not found" });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: "Failed to update task", error });
    }
};

// Delete a task
export const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) return res.status(404).json({ message: "Task not found" });
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete task", error });
    }
};
