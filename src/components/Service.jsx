import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


const ServiceCard = ({ name, img, specialized, path ,isEven  }) => {

    return (
        <>
            <div className={`flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col align-center h-auto w-full justify-center md:justify-evenly gap-10 md:gap-30 p-8`}>
                <div className="flex justify-center w-full md:w-3/4 md:p-5 p-2 aspect-auto">
                    <motion.img
                        src={img}
                        alt="Service"
                        className='object-cover h-[20rem] w-[20rem] rounded-lg border-black border aspect-square'
                    />
                </div>
                <div className="w-full pt-10">
                    <h1 className="text-5xl font-medium flex text-center items-center justify-center mb-6">{name}</h1>
                    <p className="text-1xl flex items-center justify-center text-center px-10 ">{specialized}</p>
                    <div className="w-full flex items-center justify-center mt-7">
                        {/* <Link to={path}>
                            <button className="btn">
                                KNOW MORE
                            </button>
                        </Link> */}
                    </div>
                </div>
            </div>
        </>
    )
}

const Service = () => {

    const Services = [
        {
            name: "Panchakarma",
            img: "IMGS.png",
            specialized: (
                <span>Panchakarma, a Sanskrit term meaning <strong className='text-green-500'>Five-actions</strong> stands as a cornerstone in Ayurvedic medicine, offering a holistic approach to detoxification and rejuvenation. The five Procedures <strong className='text-[#5FCE55]'> Vamana</strong>, <strong className='text-[#5FCE55]'>Virechana</strong>, <strong className='text-[#5FCE55]'>Basti</strong>, <strong className='text-[#5FCE55]'> Nasya</strong>, and <strong className='text-[#5FCE55]'>Raktamokshana aim</strong> to cleanse the body of toxins and restore balance. From controlled vomiting to medicated enemas and bloodletting, each method targets specific bodily systems, promoting overall well-being, improved immunity, and a harmonized dosha balance.
                </span>),
            path: "services/panchakarma",
        },
        {
            name: "Garbhsanskar",
            img: "garbhsanskar.png",
            specialized: (<span>Garbhsanskar, rooted in ancient Ayurvedic wisdom, focuses on nurturing the unborn child during pregnancy. This practice recognizes the profound impact of the mother's physical, mental, and emotional state on the developing fetus. Through positive influences such as meditation, music, and a healthy lifestyle, Garbhsanskar aims to optimize the child's holistic development. Education for expectant parents about creating a positive and nurturing environment further contributes to the well-being of both mother and child.</span>),
            path: "services/garbhsanskar",
        },
        {
            name: "Agni Karma",
            img: "IMGS.png",
            specialized: (<span>Agni Karma, an Ayurvedic therapeutic procedure, involves the controlled application of heat to address various health issues, particularly localized pain and inflammation. This method includes the targeted application of heat through herbal pastes or heated instruments, stimulating circulation and reducing inflammation. By balancing the doshas and enhancing the body's natural healing processes, Agni Karma proves valuable in alleviating pain, promoting recovery, and contributing to the overall harmony of the individual's health.</span>),
            path: "services/agnikarma",
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
                            <ServiceCard
                                key={index}
                                name={data.name}
                                img={data.img}
                                specialized={data.specialized}
                                path={data.path}
                                isEven={index % 2 === 0} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Service
