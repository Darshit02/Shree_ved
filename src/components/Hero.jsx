import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <>
      <div className=" mx-3 " id='home'>
        <div className='flex justify-evenly items-center md:flex-row-reverse flex-col gap-0 overflow-hidden'>
          <motion.div
            className="img"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <img src="Hero.png" alt="" className='md:h-[30rem] md:w-[30rem] xl:h-[40rem] xl:w-[100vh] w-full mt-3 object-contain' />
          </motion.div>
          <div className="flex flex-col items-center gap-6 xl:gap-6 xl:items-start ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <div className="text text-center xl:text-left xl:ml-[7rem] xl:gap-5 flex flex-col gap-3">
                <h2 className='text-4xl font-extrabold leading-10'>Discover Harmony <br />and Healing with <br /><span className='text-[#5FCE55]'>Ayurveda.</span></h2>
                <p className='font-bold text-gray-400'>Ayurveda views health and well-being as a delicate balance <br />
                  between the body, mind, and spirit. It emphasizes the <br />
                  importance of maintaining this balance to achieve optimal health.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <Link to="services" spy={true} smooth={true} offset={40} duration={500} >
                <button className="btn w-auto xl:ml-[6.5rem]">
                  <div className=" rounded-full bg-[#B3FFAC] relative z-1 right-3">
                    <img
                      src="alert-circle.svg"
                      alt="Alert"
                      className="p-2 h-[30px] w-[30px] mix-blend-multiply"
                    />
                  </div>
                  <p className="pt-[2px]">Services</p>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
