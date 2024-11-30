📋Assignment-Task
A Task Management System built using the MERN stack to perform basic CRUD operations. The system includes a user-friendly interface and a RESTful API for managing tasks.

🚀 Features
✅ Create Tasks: Add new tasks with a title, description, due date, and status.
✅ View Tasks: Display all tasks in a list view.
✅ Update Tasks: Edit task status.
✅ Delete Tasks: Remove tasks with confirmation prompts.
✅ Filter Tasks: View tasks by their status (Pending/Completed).
✅ Toggle Status: Easily switch task statuses between Pending and Completed.

🛠️ Technologies Used
Backend
Node.js: Server-side runtime.
Express.js: Web framework for RESTful API.
MongoDB: Database for storing tasks.
Mongoose: ORM for MongoDB.

Frontend
React.js: Frontend framework for building UI.
React Router DOM: For client-side routing.
Axios: For API communication.
React Icons: For icons.
Tailwind CSS: For styling.

Additional Tools
Nodemon: For auto-reloading the server.
Dotenv: For managing environment variables.
Concurrently: To run the server and client together during development.
CORS: For handling cross-origin requests.

📂 Project Structure
Assignment-Task/
│
├── backend/
│ ├── controllers/ # Task logic (CRUD operations)
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ ├── server.js # Entry point for the backend
│ ├── .env # Environment variables
│ └── package.json # Backend dependencies
│
├── frontend/
│ ├── src/
│ │ ├── components/ # Reusable React components
│ │ ├── pages/ # Pages for routing
│ │ ├── App.js # Main React component
│ │ └── index.js # Entry point for the frontend
│ ├── tailwind.config.js # Tailwind CSS configuration
│ ├── .env # React environment variables
│ └── package.json # Frontend dependencies
│
├── README.md # Project documentation
└── package.json # Root dependencies (concurrently setup)



## ⚙️ Installation and Setup

### Prerequisites
- **Node.js** and **npm** installed on your system.
- **MongoDB** installed locally or access to a MongoDB Atlas cluster.



### Steps to Run the Project Locally

 **Clone the Repository**  

git clone https://github.com/your-username/assignment-task.git
cd assignmenttask
Install Dependencies

##Navigate to the Backend directory and install dependencies:
cd backend
npm install

##Navigate to the Frontend directory and install dependencies:

cd ../Frontend
npm install
Run the Project

##To run the Frontend only:
npm run dev 

##To run the Backend only:
npm run dev 

##To run both the Frontend and Backend together using concurrently:
npm start


