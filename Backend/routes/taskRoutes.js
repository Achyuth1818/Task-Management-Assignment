import express from "express";
import {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

// CRUD Routes
router.post("/create", createTask); // Create a new task
router.get("/tasks", getTasks); // Get all tasks
router.put("/update/:id", updateTask); // Update a task
router.delete("/delete/:id", deleteTask); // Delete a task

export default router;
