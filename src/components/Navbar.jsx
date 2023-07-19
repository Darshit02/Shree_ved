import React, { useState } from "react";
import react from "../assets/react.svg";
import { motion } from "framer-motion";
import PlacementExample from "./Line";

const Navbar = () => {
  const naVLink = [
    {
      name : "Home",
      icon : "../../public/home.svg" ,
      path : "" 
    },
    {
      name : "About Us",
      icon : "../../public/alert-circle.svg" ,
      path : "" 
    },
    {
      name : "Contact Us",
      icon : "../../public/mail.svg" ,
      path : "" 
    }
  ]
  const [toggle, setToggle] = useState(false);
  const [isActive ,setActive] = useState(true)
  return (
    <nav className="h-16 bg-gray-100">
      <div className="flex justify-between items-start">
        <div className="flex ml-5 mt-3 items-center ">
          <img className="h-9 w-9 mix-blend-multiply" src="logo.png" alt="" />
          <p className="font-bold pl-3 text-xl text-[#5FCE55] ">Shree ved</p>
        </div>
        <div className="flex mr-5 justify-between mt-2 ml-4">
          <div className="hidden  xl:block">
            <button className="btn">
              <div className=" rounded-full bg-[#B3FFAC] relative right-3 ">
                <img
                  src="../../public/chevron-right-circle.svg"
                  alt=""
                  className="p-2 h-[30px] w-[30px] mix-blend-multiply"
                />
              </div>
              <p className="pt-[2px] text-black">Get In Touch</p>
            </button>
          </div>

          <div
            className="space-y-1.5 cursor-pointer z-50 mt-2 ml-4 bg-gray-200 px-2 py-2 rounded-lg"
            onClick={() => setToggle((prevToggle) => !prevToggle)}
          >
            <motion.span
              animate={{ rotateZ: toggle ? 45 : 0, y: toggle ? 8 : 0 }}
              className="block h-0.5 w-8 bg-black"
            ></motion.span>
            <motion.span
              animate={{ opacity: toggle ? 0 : 1 }}
              className="block h-0.5 w-6 bg-black"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggle ? -45 : 0,
                y: toggle ? -8 : 0,
                width: toggle ? 32 : 16,
              }}
              className="block h-0.5 w-4 bg-black"
            ></motion.span>
          </div>
          {toggle && (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 25 }}
              className="fixed bg-gray-200 flex right-0 w-[15rem] xl:w-[20rem] h-screen items-start justify-start z-40"
            >
              <div className="flex flex-col gap-5 text-lg mt-[7rem] ml-10">
                {naVLink.map((link) => (
                  <a href={link.path}>
                    <div className="flex relative right-0 hover:bg-white pr-2 pl-1 py-2 rounded-xl"> <img src={link.icon} alt="" className="px-2"/><span>{link.name}</span></div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
