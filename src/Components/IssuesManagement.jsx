import  { use } from 'react';
import Container from '../Container';
import Issue from './Issue';
import TaskStatus from './TaskStatus';

const IssuesManagement = ({fetchPromise}) => {
  
  const issueData = use(fetchPromise)
      console.log(issueData);

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
    <Container>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* column 1 */}
        <div className=" sm:col-span-1  md:col-span-2 ">
          <h2 className="p-1 md:text-xl">Customer Tickets</h2>
          <div className=" grid grid-cols-2 justify-between items-center gap-2 p-4">
            {/* cards */}
            {issueData.map((issue) => (
              <Issue key={issue.ticketId} issue={issue}></Issue>
            ))}
          </div>
          <div className=" "></div>
        </div>
        {/* column 2 */}
        <div className="w-[full] p-4">
         
          <TaskStatus></TaskStatus>
        </div>
      </div>
    </Container>
  );
};

export default IssuesManagement;