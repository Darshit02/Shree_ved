import React from 'react'
import react from '../assets/react.svg'
import PlacementExample from './Line'


const Navbar = () => {
  return (
    <nav className='h-16 bg-gray-100'>
        <div className="flex justify-between items-start">
          <div className="flex ml-5 mt-3">
            <img src={react} alt=""/>
            <p className="font-bold pl-3 text-xl text-[#5FCE55]">Text</p>
          </div>
          <div className="flex mr-5 justify-between mt-2 ml-4">
            <div className="hidden  xl:block">
            <button className='btn'>
              <div className="rounded-full bg-[#B3FFAC] relative right-3">
              <img src={react} alt="" className='h-[30px] w-[30px]'/>
              </div>
              <p className="pt-[2px] text-white">Get In Touch</p>
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