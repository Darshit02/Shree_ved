import React from 'react'
import { FaTelegram } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";

const Footer = () => {
    return (
        <>

            <footer className="text-gray-600 body-font bg-gray-100">
                <div className="container px-5 pt-10 pb-5 mx-auto ">
                    <div className="flex flex-wrap justify-evenly md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Know US</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a href='/about' className="text-gray-600 hover:text-gray-800">About US</a>
                                </li>
                                <li>
                                    <a href='/contact' className="text-gray-600 hover:text-gray-800">Contect US</a>
                                </li>
                                <li>
                                    <a href='/team' className="text-gray-600 hover:text-gray-800">Our Team</a>
                                </li>
                                <li>
                                    <a href='/services' className="text-gray-600 hover:text-gray-800">Our Services</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Shree-Ved Ayurvedic Hospital</h2>
                            <p>
                                Moto
                            </p>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact US </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Address</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">phone</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Instagram</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <div className="flex ml-5 items-center flex-row ">
                            <a href="/">
                                <img className="h-9 w-9 mix-blend-multiply" src="logo.png" alt="" />
                            </a>
                            <a href="/">
                                <p className="font-bold pl-3 text-xl text-[#5FCE55] ">Shree ved</p>
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 Shree Ved Ayurvedic Hospital</p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start">
                            <a className="text-gray-500 text-2xl">
                                <BiLogoFacebookCircle />
                            </a>
                            <a href='https://www.instagram.com/shreeved22/' className="ml-3 text-gray-500 text-2xl">
                                <AiFillInstagram />
                            </a>
                            <a  className='ml-3 text-gray-500 text-xl'>
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
