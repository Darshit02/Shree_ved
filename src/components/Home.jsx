import React from 'react'

const Home = () => {
  return (
    <>
    <div className=" w-full h-screen">
    <div className='flex justify-between items-center xl:flex-row-reverse flex-col gap-'>
        <div className="img">
        <img src="/public/Img - Hero.svg" alt="" className='xl:h-[48rem]'/>
        </div>
        <div className="flex flex-col items-center gap-6 xl:gap-6 xl:items-start ">
        <div className="text text-center xl:text-left xl:ml-[7rem] xl:gap-5 flex flex-col gap-3">
            <h2 className='text-4xl font-extrabold leading-10'>Discover Harmony <br />and Healing with <br /><span className='text-[#5FCE55]'>Ayurveda.</span></h2>
            <p className='font-bold text-gray-400'>Ayurveda views health and well-being as a delicate balance <br />
             between the body, mind, and spirit. It emphasizes the <br />
            importance of maintaining this balance to achieve optimal health.</p>
        </div>
        <button className="btn w-[11rem] xl:ml-[6.5rem]">
              <div className=" rounded-full bg-[#B3FFAC] relative right-3 ">
                <img
                  src="/public/alert-circle.svg"
                  alt=""
                  className="p-2 h-[30px] w-[30px] mix-blend-multiply"
                />
              </div>
              <p className="pt-[2px] text-black">Get In Touch</p>
            </button>
            </div>
    </div>
    </div>
    </>
        
  
  )
}

export default Home