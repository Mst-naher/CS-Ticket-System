import React from 'react';

const StatusCard = ({handleStatusCard, ticket }) => {
  const { title, ticketId } = ticket;
  // console.log(ticket);
  return (
    <div
      className=" bg-amber-400 text-xl text-center  rounded-2xl m-3 gap-2 relative"
      style={{
        background:
          "linear-gradient(#ffffff90, #FCB700), url('images/image09.jpeg')",
      }}
    >
      <h1 className="m-5 text-purple-900"> Progress issue : {title}</h1>
      <p className="absolute top-18 left-5 bg-amber-100 rounded-lg text-amber-700">
        {ticketId}
      </p>
      <button
        onClick={()=> handleStatusCard(ticket)}
        className="btn btn-primary text-lg text-green-700 border-none bg-green-200 p-1 rounded-2xl m-3"
      >
        Complete
      </button>
    </div>
  );
};

export default StatusCard;