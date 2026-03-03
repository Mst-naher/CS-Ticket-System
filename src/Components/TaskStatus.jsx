import React from 'react';

const TaskStatus = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700">Task Status</h2>
      <p className="text-gray-400">Select a ticket to add to Task Status</p>
      <div className=" ">
        <h1 className="md:text-2xl font-semibold text-gray-700">
          Resolved Task
        </h1>
        <p>No resolved tasks yet.</p>
      </div>
    </div>
  );
};

export default TaskStatus;