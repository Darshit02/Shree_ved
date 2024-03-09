import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div id="about" className="mx-2" >
      <motion.div
        className="text-4xl font-semibold pt-[4rem] md:pt-[8rem] px-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.5, 0.5, 1.03]
        }}
        viewport={{ once: true }}
      >About
        <span className="text-[#5FCE55]">Us</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.5, 0.5, 1.03]
        }}
        viewport={{ once: true }}
        className="h-px my-4  border-[2px] border-black" />
      <motion.p
        className="text-center mx-4 pt-16 xl:text-xl leading-7 xl:leading-10 text-gray-600"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        viewport={{ once: true }}
      >
        The main aim of these institutions is to promote health and wellness by
        focusing on balance between <span className="text-[#5FCE55]">Physical & mental health</span> . Our <br />
        hospital usually employ highly qualified doctors proficient in both
        Western as well as <span className="text-[#5FCE55]">Eastern medical practices.</span>  We also <br />
        often have state-of-the-art infrastructure allowing them to offer a wide
        range of treatments for various ailments such as skin
        <br />
        issues or behavioral disorders.
        <br />
        Overall, if you're looking for a holistic <span className="text-[#5FCE55]">medical</span>  approach to treating
        your body, mind and soul then make sure to check out the “Services"
        <br />
        section to know more About Our facility!
      </motion.p>
      <div className="flex w-full justify-center text-base" >
      </div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.5, 0.5, 1.03]
        }}
        viewport={{ once: true }}
        className="text-center mx-4 text-lg xl:text-3xl font-semibold text-[#5FCE55] justify-center italic underline  decoration-[#5FCE55] my-[2rem]">" Harnessing the ancient wisdom of Ayurveda to restore balance,<br /> promote holistic well-being, and nurture your body, mind, and spirit. "</motion.p>
    </div>
  );
};

export default AboutUs;
