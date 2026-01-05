import React from "react";
import Container from "../Container";

const CountBox = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-[20px] my-[50px]">
        <div className="rounded-md p-4 text-white h-[150px]  bg-[url('/images/vector1.png')] bg-no-repeat bg-cover  position-center bg-purple-500 flex flex-col justify-center items-center">
          <h2 className="font-bold text-[35px]">In-Progress</h2>
          <span className="font-semibold text-[40px]">0</span>
        </div>
        <div className="rounded-md p-4 text-white h-[150px] bg-[url('/images/vector1.png')] bg-no-repeat bg-cover  position-center bg-green-500  flex flex-col justify-center items-center">
          <h2 className="font-bold text-[35px]">Resolved</h2>
          <span className="font-semibold text-[40px]">0</span>
        </div>
      </div>
    </Container>
  );
};

export default CountBox;
