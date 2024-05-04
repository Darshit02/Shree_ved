import React from 'react'
import { FaTelegram } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle, BiPhoneCall } from "react-icons/bi";
import { Link } from "react-scroll";
import PhoneNumber from './UI/PhoneNumber';

const Footer = () => {
    return (
        <>

            <footer className="text-gray-600 body-font bg-[#ECF5DE]">
                <div className="container px-5 pt-10 md:pb-5 pb-0 mx-auto ">
                    <div className="flex flex-wrap justify-evenly md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Know US</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link to='home' spy={true} smooth={true} offset={0} duration={500} className="text-gray-600 hover:text-gray-800 cursor-pointer">Home</Link>
                                </li>
                                <li>
                                    <Link to='about' spy={true} smooth={true} offset={0} duration={500} className="text-gray-600 hover:text-gray-800 cursor-pointer">About US</Link>
                                </li>
                                <li>
                                    <Link to='contact' spy={true} smooth={true} offset={0} duration={500} className="text-gray-600 hover:text-gray-800 cursor-pointer">Contact US</Link>
                                </li>
                                <li>
                                    <Link to='team' spy={true} smooth={true} offset={0} duration={500} className="text-gray-600 hover:text-gray-800 cursor-pointer">Our Team</Link>
                                </li>
                                <li>
                                    <Link to='services' spy={true} smooth={true} offset={0} duration={500} className="text-gray-600 hover:text-gray-800 cursor-pointer">Our Services</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest  text-sm mb-3">Shree-Ved Ayurveda Hospital</h2>
                            <p>
                                Discover Harmony
                                and Healing with
                                Ayurveda.
                            </p>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 md:my-0 my-2">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact US </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">
                                        <p>1st floor, Vaidehi Plaza</p>
                                        <p>Opp. Hanumanji Temple</p>
                                        <p>Ravapar-Ghunda Road, Morbi , 363641</p>
                                    </a>
                                </li>
                                <li>
                                    <PhoneNumber phoneNumber="7575010210" />
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-[#ECF5DE] flex items-center justify-center">
                    <div className="container px-5 md:py-6 py-2 mx-auto flex items-center sm:flex-row flex-col">
                        <div className="flex ml-5 items-center flex-row ">
                            <a href="/">
                                <img className="h-9 w-9 mix-blend-multiply" src="logo.png" alt="" />
                            </a>
                            <a href="/">
                                <p className="font-bold pl-3 text-xl text-[#5FCE55] ">Shree ved</p>
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">Since 2022 Shree Ved Ayurveda Hospital</p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start ">
                            <a href='https://www.instagram.com/shreeved22/' className=" text-gray-500 text-2xl">
                                <AiFillInstagram />
                            </a>
                            <a className="text-gray-500 text-2xl ml-3">
                                <BiLogoFacebookCircle />
                            </a>
                            <a className='ml-3 text-gray-500 text-xl'>
                                <FaTelegram />
                            </a>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
