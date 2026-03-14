import React from 'react';
import logo from "../../public/images/logo.png"
import Container from '../Container';
import { FiMinus } from 'react-icons/fi';

const Logo = () => {
  return (
   
      <div className='flex items-center gap-1'>
        <img className="w-10" src={logo} alt="" />
        <div>
          <h1 className="flex justify-center items-center md:text-2xl text-sm font-bold   ">
            Csz
            <span>
              <FiMinus/>
            </span>
            Ticket System
          </h1>
        </div>
      </div>
    
  );
};

export default Logo;