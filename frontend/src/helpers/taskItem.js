import React from "react";

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <h2>{task.username}</h2>
      <p>Email: {task.userEmail}</p>
      <p>Mobile: {task.userMobile}</p>
      <p>Location: {task.location}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskItem;
