import React from "react";
import Container from "../../Container";
import { FaMinus } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import './Footer.css'


const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 p-8 mb-[30px]">
      <Container>
        <div className="grid md:grid-cols-5 gap-8 mt-[20px]">
          <div className="">
            <h3 className="text-white  font-bold text-xl flex justify-center  items-center text-left ">
              CS <FaMinus />
              Ticket System
            </h3>
            <p className="text-sm mt-2 text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <h4 className="text-white  font-semibold text-md ">Company</h4>
            <a href="#" className=" mt-3 ">
              About Us
            </a>
            <a href="#" className=" mt-3 ">
              Our Mission
            </a>
            <a href="#" className=" mt-3 ">
              Contact Saled
            </a>
          </div>
          <div className="sm:flex flex-col text-center md:text-left">
            <h4 className="text-white  font-semibold text-md ">Services</h4>
            <p className=" mt-3 ">Products & Services</p>
            <p className=" mt-3 ">Customer Stories</p>
            <p className=" mt-3 ">Download Apps</p>
          </div>
          <div className="sm:flex flex-col text-center md:text-left">
            <h4 className="text-white  font-semibold text-md ">Information</h4>
            <p className=" mt-3 ">Privacy Policy</p>
            <p className=" mt-3 ">Terms & Conditions</p>
            <p className=" mt-3 ">Join Us</p>
          </div>
          <div>
            <div className="sm:flex flex-col text-center md:text-left">
              <h4 className="text-white  font-semibold text-md ">
                Social Links
              </h4>
              <div className="flex justify-start items-center gap-2">
                <div className="w-[20px] h-[20px] rounded-[50%] bg-white text-black border-none text-center mt-3">
                  <RiTwitterXLine />
                </div>
                <p className=" mt-3 ">@CS — Ticket System</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <div className="w-[20px] h-[20px] rounded-[50%] bg-white text-black border-none text-center mt-3">
                  <FaLinkedinIn />
                </div>
                <p className=" mt-3 ">@CS — Ticket System</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <div className="w-[20px] h-[20px] rounded-[50%] bg-white text-black border-none text-center mt-3">
                  <FaFacebookF />
                </div>
                <p className=" mt-3 ">@CS — Ticket System</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <div className="w-[20px] h-[20px] rounded-[50%] bg-white text-black border-none text-center mt-3">
                  <HiOutlineMail />
                </div>
                <p className=" mt-3 ">@CS — Ticket System</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[0.01px] border-t-gray-100 mt-[50px]">
          <p className="text-gray-100 md:text-sm text-center mt-[30px]">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
