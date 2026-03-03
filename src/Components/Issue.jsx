import React from 'react';

const Issue = ({ issue }) => {
  console.log(issue)
  const { title, description, ticketId, priority, status, customer, createdAt } = 
    issue
  
   

  return (
    <div>
      <div className="shadow-md  bg-amber-100  flex flex-col  w-[full] py-6 p-2">
        <div className="flex justify-between  mb-2">
          <h1 className="md:text-xl md:font-semibold text-gray-600">
            {title}
          </h1>
          <button className="bg-green-100 px-3 text-green-800 rounded-full text-sm">
            {status}
          </button>
        </div>
        <p className="text-sm text-gray-400  mb-2">{description}</p>
        <div className="flex justify-between items-center  mb-2">
          <div className="flex flex-col justify-between items-center">
            <p className="text-gray-400">{ticketId}</p>
            <div>
              <span
                className={`${
                  priority == "HIGH PRIORITY"
                    ? "text-red-600 text-sm"
                    : priority == " MEDIUM PRIORITY "
                      ? "text-yellow-600 text-sm"
                      : "text-green-600 text-sm"
                }`}
              >
                {priority}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="text-gray-400 text-sm">{customer}</div>
            <div className="text-gray-400 text-sm">{createdAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issue;