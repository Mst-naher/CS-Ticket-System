import React from 'react';
import Container from '../Container';
import { FiMinus } from "react-icons/fi";
import Logo from './Logo';

const Navbar = () => {
  
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 bg-white shadow-md border-b-[0.5px] border-gray-300 py-4">
        <div className="">
          <Logo></Logo>
        </div>
        <div className="flex items-center md:gap-8">
          <a
            href="#"
            className="text-gray-600 text-sm md:text-sm hover:font-bold duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 m-1 text-sm md:text-sm hover:font-bold duration-200"
          >
            FAQ
          </a>
          <a
            href="#"
            className="text-gray-600 text-sm md:text-sm hover:font-bold duration-200"
          >
            Changelog
          </a>
          <a
            href="#"
            className="text-gray-600 m-1 text-sm md:text-sm hover:font-bold duration-200"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-gray-600 text-sm md:text-sm hover:font-bold duration-200"
          >
            Download
          </a>
          <a
            href="#"
            className="text-gray-600 m-1 text-sm md:text-sm hover:font-bold duration-200"
          >
            Contact
          </a>
          <button className="bg-gradient-to-r from-[#422AD5] to-[#a79beb] text-white text-sm hover:font-bold duration-200 border-none rounded-md md:rounded-md px-1 md:px-3 py-1">
            + New Ticket
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;