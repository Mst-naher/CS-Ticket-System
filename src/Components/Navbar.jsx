import React from 'react';
import Container from '../Container';
import { FiMinus } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md border-b-[0.5px] border-gray-300">
      <Container>
        <div className="flex justify-between items-center px-6 py-5">
          <h1 className="flex justify-center items-center md:text-2xl text-sm font-bold   ">
            CS
            <span>
              <FiMinus />
            </span>
            Ticket System
          </h1>
          <div className="md:flex hidden  items-center gap-8">
            <a href="#" className="text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-600">
              FAQ
            </a>
            <a href="#" className="text-gray-600">
              Changelog
            </a>
            <a href="#" className="text-gray-600">
              Blog
            </a>
            <a href="#" className="text-gray-600">
              Download
            </a>
            <a href="#" className="text-gray-600">
              Contact
            </a>
            <button className="bg-gradient-to-r from-[#422AD5] to-[#a79beb] text-white border-none rounded-sm px-3 py-1">
              + New Ticket
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;