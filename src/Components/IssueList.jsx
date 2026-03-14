import React from "react";
import TaskStatus from "./TaskStatus";
import IssueCard from "./IssueCard";

const IssueList = ({
  handleResolvedTask,
  handleStatusCard,
  handleCustomerTicket,
  tickets,
  progressCount,
  resolvedCount,
}) => {
  // console.log(issue);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
      <div className=" sm:col-span-1  md:col-span-2 ">
        <h2 className="p-1 md:text-xl">Customer tickets list :</h2>
        <div className=" grid grid-cols-2 justify-between items-center gap-2 space-y-4">
          {/*Issues cards */}
          {tickets.map((ticket) => (
            <IssueCard
              handleResolvedTask={handleResolvedTask}
              handleCustomerTicket={handleCustomerTicket}
              key={ticket.ticketId}
              ticket={ticket}
            ></IssueCard>
          ))}
        </div>
      </div>
      {/* column 2 */}
      <div className="w-[full] p-4 space-y-5">
        <TaskStatus
          handleResolvedTask={handleResolvedTask}
          resolvedCount={resolvedCount}
          tickets={tickets}
          handleStatusCard={handleStatusCard}
          progressCount={progressCount}
        ></TaskStatus>
      </div>
    </div>
  );
};

export default IssueList;
