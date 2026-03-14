import { use, useState } from "react";
import Container from "../Container";
import IssueList from "./IssueList";
import TaskStatus from "./TaskStatus";
import CountBox from "./CountBox";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const IssuesManagement = ({ fetchPromise }) => {
  const data = use(fetchPromise);
  // console.log(issues);
 const [tickets, setTickets] = useState(data);

  const [progressCount, setProgressCount] = useState([]);
  const [resolvedCount, setResolvedCount] = useState([]);

  const handleStatusCard = (ticket) => {
    console.log("status card is clicked", ticket);
       toast.success("Task is progressing !!")
    // 1.resolved Task er vitore ticket k dhukabo

    const newResolvedCount = [...resolvedCount, ticket];
    setResolvedCount(newResolvedCount);

    // 2.status Task er vitore theke ticket k remove korbo
    const remaining = progressCount.filter(
      (item) => item.ticketId !== ticket.ticketId,
    );
    
   setProgressCount(remaining);

   // 3.tickets list theke ekta kore ticket remove korbo
   const remainingTickets = tickets.filter(item => item.ticketId !== ticket.ticketId)
   setTickets(remainingTickets)
  };
  // console.log("status card is clicked", resolvedCount);

const handleResolvedTask = (ticket) => {
  console.log("Task is resolved", ticket);
  toast.success("Task is Solved !!")

  const remaining = resolvedCount.filter(resolve=> resolve.ticketId !== ticket.ticketId);
  setResolvedCount(remaining);
};


  const handleCustomerTicket = (ticket) => {
    console.log(ticket);
    // age check korbo progress ticket ache kina
    const isExist = progressCount.find(
      (item) => item.ticketId == ticket.ticketId,
    );
    console.log(isExist);
    if (isExist) {
      toast("Already Exist this ticket !!");
      return;
    }

    const newProgressCount = [...progressCount, ticket];
    setProgressCount(newProgressCount);
  };

  // console.log("issue card is clicked", progressCount);

  return (
    <Container>
      <CountBox
        resolvedIssueTotal={resolvedCount.length}
        progressIssueTotal={progressCount.length}
      ></CountBox>
      <div>
        <IssueList
          handleResolvedTask={handleResolvedTask}
          resolvedCount={resolvedCount}
          handleStatusCard={handleStatusCard}
          progressCount={progressCount}
          handleCustomerTicket={handleCustomerTicket}
          tickets={tickets}
        ></IssueList>
      </div>
    </Container>
  );
};

export default IssuesManagement;
