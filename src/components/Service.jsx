import React from 'react'
import { motion } from "framer-motion";


const ServiceCard = ({ name, img, specialized, path }) => {

    return (
        <>
            <div className="flex md:flex-row flex-col align-center h-auto w-full justify-center md:justify-between gap-10 md:gap-52 p-8   ">
                <div className="flex justify-center w-full md:w-3/4 p-5  aspect-auto">
                    <motion.img 
                    src={img} 
                    alt="Service" 
                    className='object-contain'
                     />
                </div>
                <div className="w-full p-10 ">
                    <h1 className="text-5xl font-medium flex items-center justify-center mb-6">{name}</h1>
                    <p className="text-1xl flex items-center justify-center text-justify ">{specialized}</p>
                    <div className="w-full flex items-center justify-center mt-7">
                       
                            <button className="btn">
                                KNOW MORE
                            </button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

const Service = () => {

    const Services = [
        {
            name: "service-1",
            img: "IMGS.png",
            specialized: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet deleniti recusandae praesentium quidem excepturi magnam placeat reiciendis aliquid exercitationem, qui obcaecati maxime dignissimos nihil. Ad nostrum dicta eius voluptatum repellat, velit hic molestias provident rerum perferendis at laboriosam officiis voluptatibus.",
            path: "/",
        },
        {
            name: "service-2",
            img: "IMGS.png",
            specialized: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet deleniti recusandae praesentium quidem excepturi magnam placeat reiciendis aliquid exercitationem, qui obcaecati maxime dignissimos nihil. Ad nostrum dicta eius voluptatum repellat, velit hic molestias provident rerum perferendis at laboriosam officiis voluptatibus.",
            path: "/",
        },
        {
            name: "service-3",
            img: "IMGS.png",
            specialized: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet deleniti recusandae praesentium quidem excepturi magnam placeat reiciendis aliquid exercitationem, qui obcaecati maxime dignissimos nihil. Ad nostrum dicta eius voluptatum repellat, velit hic molestias provident rerum perferendis at laboriosam officiis voluptatibus.",
            path: "/",
        },
    ];


    return (
        <>
            <div id='services' className="p-5 overflow-hidden" >
                <div className="text-4xl font-semibold pt-[3rem] md:pt-[8rem] px-4">Our
                    <span className="text-[#5FCE55]"> Service</span>
                </div>
                <div className="h-px my-4  border-[2px] border-black" />

                {/* services Start from Here */}
                <div className='' >
                    {Services.map((data, index) => (
                        <ServiceCard key={index} name={data.name} img={data.img} specialized={data.specialized} path={data.path} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Service
