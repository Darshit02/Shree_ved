import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";

const Contectus = () => {
  const form = useRef();
 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_91muqel', 'template_uz15dpu', form.current, 'oPO3F5R2J-OEnNYsZ')
      .then((result) => {
        console.log(result.text);
        toast.success('Email sent Successfully!!' , {
          position: "top-right"
        });
      }, (error) => {
        console.log(error.text);
        toast.error('Something went wrong')
      });
    e.target.reset();
  };

  return (
    <>
    {/* hot toast code */}
    <Toaster /> 
      <div className="contain pt-5 mb-5 md:mt-10" id="contact">
        <motion.div
          className="text-4xl font-semibold "
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeInOut"
          }}
          viewport={{ once: true }}
        >
          Contact<span className="text-[#5FCE55] ml-1">Us</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeInOut"
          }}
          viewport={{ once: true }}
          className="h-px my-4  border-[2px] border-black" />
        {/* main contact us box  */}
        <div>
          {/* img */}
          <div className="flex justify-center mt-9 ">
            <img
              className="absolute z-10 p-1 md:p-4 h-12 w-12 md:h-28 md:w-28 border-[2px] border-black rounded-full bg-white "
              src="logo.png"
              alt="SHREE VED"
            />
          </div>
          {/* text boxes  */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="box-content p-4 md:p-14 mt-10 flex flex-col gap-6 bg-[#5FCE55]/[15%] rounded-lg md:rounded-3xl md:mt-[4.3rem] md:mx-[15%]  justify-end">
            <motion.input
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="contectb"
              type="text"
              name="name"
              placeholder="Name"
            />
            <motion.input
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="contectb"
              type="email"
              name="email"
              id=""
              placeholder="Email"
            />
            <motion.textarea
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className=" contectb"
              name="message"
              placeholder="Message"
              cols="30"
              rows="6"
            />
            {/* button */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              type="submit"
              className="btn inline-block w-full md:w-[130px]  text-white">
              <div className=" rounded-full bg-[#B3FFAC] relative md:right-3 ">
                <img
                  src="send.svg"
                  alt=""
                  className="p-2 h-[30px] w-[30px] mix-blend-multiply"
                />
              </div>
              <p className="pt-[2px] ">Send</p>
            </motion.button>
          </form>
        </div>
        {/* tag line */}
        <p className='flex md:text-3xl m-14 text-lg font-semibold text-[#5FCE55] justify-center text-center italic underline  decoration-[#5FCE55]'>"Ayurveda: The Ancient wisdom of Healing"</p>
      </div>
    </>
  );
};

export default Contectus;
