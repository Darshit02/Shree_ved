import React from 'react'
import react from '../assets/react.svg'
import PlacementExample from './Line'


const Navbar = () => {
  return (
    <nav className='h-16 bg-gray-100'>
        <div className="flex justify-between items-start">
          <div className="flex ml-5 mt-3 items-center ">
            <img className='h-9 w-9 mix-blend-multiply' src="logo.png" alt=""/>
            <p className="font-bold pl-3 text-xl text-[#5FCE55] ">Shree ved</p>
          </div>
          <div className="flex mr-5 justify-between mt-2 ml-4">
            <div className="hidden  xl:block">
            <button className='btn'>
              <div className=" rounded-full bg-[#B3FFAC] relative right-3 ">
              <img  src="logo.png" alt="" className='p-2 h-[30px] w-[30px] mix-blend-multiply'/>
              </div>
              <p className="pt-[2px] text-black">Get In Touch</p>
            </button>
            </div>
            <div className="ml-5">
              Navbar
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar