import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", taskRoutes);

const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("<h1>hello you are at home page</h1>");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
