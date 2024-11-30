import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="w-full max-w-4xl">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">
          No tasks available. Add one!
        </p>
      )}
    </div>
  );
};

export default TaskList;
