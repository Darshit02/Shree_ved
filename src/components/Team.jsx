import React from 'react'
import { motion } from "framer-motion";


const Card = ({ name, degree, img, specialized }) => {
    return (
        <motion.div
            className=" w-80 bg-transparent border border-black rounded-lg shadow-lg p-10 justify-center flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0, 0.5, 0.5, 1.03]
            }}
            viewport={{ once: true }}
        >
            <img className="flex h-32 w-32  rounded-full shadow-lg items-center mb-2" src={img} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-xl font-bold  text-black">{name}</h5>
                <p className="mb-2 font-semibold text-[#44bc39]">{degree}</p>
                <p className="mb-2 font-semibold text-[#7E7E7E]">{specialized}</p>
            </div>
        </motion.div>
    );
};

const Team = () => {

    const data = [
        {
            name: "Dr. Umesh Detroja",
            degree: "B.A.M.S. , D.P.K.",
            img: "logo.png",
            specialized: "Ayurved Doctor",
        },
        {
            name: "Dr. Maitree Detroja",
            degree: "B.A.M.S.",
            img: "logo.png",
            specialized: "Ayurved Doctor",
        },
        {
            name: "Dr. Chirag Vidja",
            degree: "B.A.M.S. , M.D.",
            img: "logo.png",
            specialized: "Ayurved Doctor",
        }
    ]
    return (
        <>
            <div className="contain pt-12" id='team'>
                {/* Name */}
                <motion.div
                    className="text-4xl font-semibold "
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0, 0.5, 0.5, 1.03]
                    }}
                    viewport={{ once: true }}
                >Our <span className='text-[#5FCE55]'>Supporting</span> Team</motion.div>
                <div className="h-px my-4  border-[2px] border-black" />
                {/* Team card */}
                <div className='md:my-24 my-12 flex flex-wrap md:flex-row gap-5 justify-center ' >
                    {data.map((data, index) => (
                        <Card key={index} name={data.name} img={data.img} degree={data.degree} specialized={data.specialized} />
                    ))}
                </div>

            </div>


        </>
    )
}

export default Team
