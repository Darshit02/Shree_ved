import React from 'react'

const Footer = () => {
    return (
        <>
        
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
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
                        <div className="flex ml-5 mt-3 items-center flex-row ">
                            <a href="/">
                                <img className="h-9 w-9 mix-blend-multiply" src="logo.png" alt="" />
                            </a>
                            <a href="/">
                                <p className="font-bold pl-3 text-xl text-[#5FCE55] ">Shree ved</p>
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 Shree Ved Ayurvedic Hospital</p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a className="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
