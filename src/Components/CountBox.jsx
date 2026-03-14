import React from "react";
import Container from "../Container";

const CountBox = ({ progressIssueTotal, resolvedIssueTotal }) => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-[20px] my-[50px]">
        {/* In-Progress */}
        <div
          className={`rounded-md p-4 text-white h-[150px]  bg-[url('/images/vector1.png')] bg-no-repeat bg-cover  position-center bg-purple-500 flex flex-col justify-center items-center`}
          style={{ backgroundSize: "100% 100%" }}
        >
          
          <h2 className="font-bold md:text-[35px]">In-Progress count</h2>
          <span className="font-semibold md:text-[40px]">
            {progressIssueTotal}
          </span>
        </div>
        {/* Resolved */}
        <div
          className={`rounded-md p-4 text-white h-[150px] bg-[url('/images/vector1.png')] bg-no-repeat bg-cover  position-center bg-green-500  flex flex-col justify-center items-center`}
          style={{ backgroundSize: "100% 100%" }}
        >
          <h2 className="font-bold md:text-[35px]">Resolved Count</h2>
          <span className="font-semibold md:text-[40px]">
            {resolvedIssueTotal}
          </span>
        </div>
      </div>
    </Container>
  );
};

export default CountBox;
