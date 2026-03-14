import React from 'react';

const ResolvedTaskCard = ({ handleStatusCard, ticket, handleResolvedTask }) => {
  console.log(ticket, handleStatusCard);
  const { title, ticketId } = ticket;
  return (
    <div>
      <div
        className=" bg-amber-400 text-xl text-center  rounded-2xl m-3 gap-2 relative"
        style={{
          background:
            "linear-gradient(#ffffff90, #FCB700), url('images/image09.jpeg')",
        }}
      >
        <h1 className="m-5 text-purple-900"> Solved this task : {title}</h1>
        <p className="absolute top-18 left-5 bg-amber-100 rounded-lg text-amber-700">
          {ticketId}
        </p>
        <button
          onClick={() => handleResolvedTask(ticket)}
          className="btn btn-primary text-lg text-green-700 border-none bg-green-200 p-1 rounded-2xl m-3"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default ResolvedTaskCard;