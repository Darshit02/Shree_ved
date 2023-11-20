import React, { useState } from "react";
import { Link } from "react-scroll";
import { easeInOut, motion } from "framer-motion";

const Navbar = () => {
  const naVLink = [
    {
      name: "Home",
      icon: "home.svg",
      path: "home"
    },
    {
      name: "About Us",
      icon: "about.svg",
      path: "about"
    },
    {
      name: "Team",
      icon: "alert-circle.svg",
      path: "team"
    },
    {
      name: "Services",
      icon: "Services.svg",
      path: "services"
    },
    {
      name: "Contact Us",
      icon: "mail.svg",
      path: "contact"
    },
  ];

  const [toggle, setToggle] = useState(false);
  const [isActive, setActive] = useState(true);

  const toggleMenu = () => {
    setToggle(!toggle);
    if (!toggle) {
      document.body.classList.add('no-scroll');
      document.body.classList.add('overlay');
    } else {
      document.body.classList.remove('no-scroll')
      document.body.classList.remove('overlay')
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <nav className={`h-16 bg-[#ECF5DE] drop-shadow-lg `}>
          <div className="flex justify-between items-start">
            <div className="flex ml-5 mt-3 items-center flex-row ">
              <a href="/">
                <img className="h-9 w-9 mix-blend-multiply" src="logo.png" alt="" />
              </a>
              <a href="/">
                <p className="font-bold pl-3 text-xl text-[#5FCE55] ">Shree ved</p>
              </a>
            </div>
            <div className="flex mr-5 justify-between mt-2 ml-4 sticky top-0">
              <div className="hidden  xl:block">
                <Link to="contact" spy={true} smooth={true} offset={0} duration={500} >
                  <button className="btn">
                    <div className=" rounded-full bg-[#B3FFAC] relative right-3 ">
                      <img
                        src="chevron-right-circle.svg"
                        alt=""
                        className="p-2 h-[30px] w-[30px] mix-blend-multiply"
                      />
                    </div>
                    <p className="pt-[2px] text-black">Get In Touch</p>
                  </button>
                </Link>
              </div>

              <div
                className={`space-y-1.5 cursor-pointer z-50 mt-2 ml-4 bg-[#ECF5DE] px-2 py-2 rounded-lg`}
                onClick={toggleMenu}
              >
                <motion.span
                  animate={{
                    rotateZ: toggle ? 45 : 0,
                    y: toggle ? 8 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-0.5 w-8 bg-black"
                ></motion.span>
                <motion.span
                  animate={{ opacity: toggle ? 0 : 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-0.5 w-6 bg-black"
                ></motion.span>
                <motion.span
                  animate={{
                    rotateZ: toggle ? -45 : 0,
                    y: toggle ? -8 : 0,
                    width: toggle ? 32 : 16,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-0.5 w-4 bg-black"
                ></motion.span>
              </div>

              {isActive && toggle && (
                <>
                  <motion.div
                    initial={{ x: 100 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className={`fixed top-16 bg-[#ECF5DE] flex right-0 md:w-[15rem] w-full xl:w-[30rem] h-screen md:h-fit  items-start justify-start z-[10] drop-shadow-xl`}
                  >
                    <div className="flex flex-col gap-5 text-lg mt-[7rem] md:my-[3rem] ml-10 ">
                      {naVLink.map((link) => (
                        <Link to={link.path} spy={true} smooth={true} offset={0} duration={500}>
                          <div className="flex relative right-0 hover:bg-white md:pr-2 md:pl-1 md:py-2 rounded-xl cursor-pointer md:text-lg text-2xl " onClick={toggleMenu}>
                            <img src={link.icon} alt="" className="px-2" onClick={toggleMenu} /><span>{link.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;
