import  { use } from 'react';
import Container from '../Container';

const IssuesManagement = ({fetchPromise}) => {
  
  const initialData = use(fetchPromise)
      console.log(initialData)

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

  return (
    <div>

     
            <div>
              <Container>
                <div className="border-2 border-green-500  grid grid-cols-3 gap-5">
                  {/* column 1 */}
                  <div className="border-2 border-purple-500  md:col-span-2 ">
                    <h2 className="p-2 text-xl">Customer Tickets</h2>
                    <div className=" grid grid-cols-2 justify-between items-center gap-5 p-4">
                      {/* card -1 */}
                      { initialData.map(issue=>{
                        return (
                          <div className="border-2 border-red-500 shadow-md  bg-amber-100  flex flex-col  md:w-[full] p-4">
                            <div className="flex justify-between  mb-2">
                              <h1 className="text-xl font-semibold text-gray-600">
                                {issue.title}
                              </h1>
                              <button className="bg-green-300 px-3 text-green-800 rounded-full text-semibold">
                                {issue.status}
                              </button>
                            </div>
                            <p className="text-sm text-gray-400  mb-2">
                              {issue.description}
                            </p>
                            <div className="flex justify-between items-center  mb-2">
                              <div className="flex justify-between items-center gap-5">
                                <div className="text-gray-400">
                                  {issue.ticketId}
                                </div>
                                <div>
                                  <span
                                    className={`${
                                      issue.priority == "HIGH PRIORITY"
                                        ? "text-red-600"
                                        : issue.priority == " MEDIUM PRIORITY "
                                        ? "text-yellow-600"
                                        : "text-green-600"
                                    }`}
                                  >
                                    {issue.priority}
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between items-center gap-5">
                                <div className="text-gray-400">
                                  {issue.customer}
                                </div>
                                <div className="text-gray-400">
                                  {issue.createdAt}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }) 
                       }
                      
                     
                    </div>
                    <div className=" "></div>
                  </div>
                  {/* column 2 */}
                  <div className=" border-2 border-red-500  w-[full] p-4">
                    <h2 className="text-2xl font-semibold text-gray-700">
                      Task Status
                    </h2>
                    <p className="text-gray-400">
                      Select a ticket to add to Task Status
                    </p>
                    <div className=" ">
                      <h1 className="text-2xl font-semibold text-gray-700">
                        Resolved Task
                      </h1>
                      <p>No resolved tasks yet.</p>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          
   


       
    </div>
  );
};

export default IssuesManagement;