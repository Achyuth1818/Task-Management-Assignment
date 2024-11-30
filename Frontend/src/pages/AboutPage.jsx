import React from "react";
import Navbar from "../components/Navbar"; // Ensure the file name matches correctly

const AboutPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen pt-20 bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center p-6">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-8">
          About Task Manager
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl">
          {/* Purpose Section */}
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Purpose of Task Manager
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Task Manager is a user-friendly application designed to help
            individuals and teams effectively manage their tasks. It streamlines
            the process of organizing, tracking, and completing tasks, making
            productivity more achievable.
          </p>

          {/* Features Section */}
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              Create tasks with titles, descriptions, due dates, and statuses.
            </li>
            <li>View all tasks in a clean and organized layout.</li>
            <li>Update tasks to mark them as completed or make edits.</li>
            <li>
              Delete tasks when no longer needed, with a confirmation prompt.
            </li>
            <li>
              Filter tasks based on their status (e.g., Pending or Completed).
            </li>
          </ul>

          {/* Technologies Section */}
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Technologies Used
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This application was built using the <strong>MERN stack</strong>, a
            combination of the following technologies:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              <strong>MongoDB:</strong> Database to store tasks and their
              attributes.
            </li>
            <li>
              <strong>Express.js:</strong> Backend framework for handling API
              requests.
            </li>
            <li>
              <strong>React:</strong> Frontend framework for building the user
              interface.
            </li>
            <li>
              <strong>Node.js:</strong> Runtime environment for the server-side
              application.
            </li>
          </ul>

          {/* Uses Section */}
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Uses of Task Manager
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Task Manager is versatile and can be used in various scenarios:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Personal task organization and daily planning.</li>
            <li>Team collaboration to assign and track tasks.</li>
            <li>Project management for tracking deadlines and deliverables.</li>
            <li>
              Academic planning for students to manage assignments and projects.
            </li>
          </ul>

          <p className="text-center text-blue-600 font-medium">
            Try the Task Manager today and take control of your productivity!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
