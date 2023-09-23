import React from "react";

const AboutUs = () => {
  return (
    <div id="about">
      <div className="text-4xl font-semibold pt-[8rem] px-4">About
     <span className="text-[#5FCE55]"> Us</span> 
      </div>
      <div className="h-px my-4  border-[2px] border-black" />
      <p className="text-center mx-4 pt-16 xl:text-xl leading-7 xl:leading-10 text-gray-600">
        The main aim of these institutions is to promote health and wellness by
        focusing on balance between <span className="text-[#5FCE55]">physical & mental health</span> . Our <br />
        hospital usually employ highly qualified doctors proficient in both
        Western as well as <span className="text-[#5FCE55]">Eastern medical practices.</span>  We also <br />
        often have state-of-the-art infrastructure allowing them to offer a wide
        range of treatments for various ailments such as skinbr
        <br />
        issues or behavioral disorders.
        <br />
        Overall, if you're looking for a holistic <span className="text-[#5FCE55]">medical</span>  approach to treating
        your body, mind and soul then make sure to check out the “Services"
        <br />
        section to know more About Our facility!
      </p>
      <button className="btn w-[130px] text-white relative left-[12rem] xl:left-[41rem] mt-10">
              <div className=" rounded-full bg-[#B3FFAC] relative right-3 ">
                <img
                  src="plus-square.svg"
                  alt=""
                  className="p-2 h-[30px] w-[50px] mix-blend-multiply"
                />
              </div>
              <p className="pt-[2px]">Services</p>
            </button>
            <p className="text-center mx-4 text-base xl:text-3xl text-gray-600 mt-[5rem]">Harnessing the ancient wisdom of Ayurveda to restore balance,<br /> promote holistic well-being, and nurture your body, mind, and spirit.</p>
    </div>
  );
};

export default AboutUs;
