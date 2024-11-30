import axios from "axios";

// Base URL of the backend
const API = axios.create({ baseURL: "http://localhost:5000/api" });

// API functions
export const fetchTasks = () => API.get("/tasks");
export const createTask = (task) => API.post("/create", task);
export const updateTask = (id, updatedTask) => API.put(`/update/${id}`, updatedTask);
export const deleteTask = (id) => API.delete(`/delete/${id}`);
