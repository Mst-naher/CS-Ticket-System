import React from "react";
import StatusCard from "./StatusCard";
import ResolvedTaskCard from "./ResolvedTaskCard";

const TaskStatus = ({
  progressCount,
  handleStatusCard,
  resolvedCount,
  handleResolvedTask,
}) => {
  return (
    <>
      {/* Task Status */}
      <div className="py-3 shadow-xl p-2">
        <h2 className="text-2xl font-semibold text-gray-700">Task Status</h2>
        <p className="text-gray-400">#</p>
        <div className="py-3 ">
          {progressCount.map((ticket) => (
            <StatusCard
              handleResolvedTask={handleResolvedTask}
              ticket={ticket}
              handleStatusCard={handleStatusCard}
              key={ticket.ticketId}
            ></StatusCard>
          ))}
        </div>
      </div>
      {/* Resolved Task */}
      <div className="py-3 shadow-xl p-2">
        <h1 className="md:text-2xl font-semibold text-gray-700">
          Resolved Task List
        </h1>
        <p>No task resolved yet.</p>
        {resolvedCount.map((ticket) => (
          <ResolvedTaskCard
            handleResolvedTask={handleResolvedTask}
            ticket={ticket}
            handleStatusCard={handleStatusCard}
            key={ticket.ticketId}
          ></ResolvedTaskCard>
        ))}
      </div>
    </>
  );
};

export default TaskStatus;

//       createdAt
// :
// "2024-01-20"
// customer
// :
// "Sophia Taylor"
// description
// :
// "Customer requested a refund two weeks ago but has not received the amount yet."
// priority
// :
// "MEDIUM PRIORITY"
// status
// :
// "In-Progress"
// ticketId
// :
// "#1006"
// title
// :
// "Refund Not Processed
