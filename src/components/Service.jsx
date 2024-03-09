import React from 'react';
import { motion } from "framer-motion";

const ServiceCard = ({ name, img, specialized, path, isEven }) => {
    return (
        <div className={`flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col align-center h-auto w-full justify-center md:justify-evenly gap-10 md:gap-30 p-8`}>
            <div className="flex justify-center w-full md:w-3/4 md:p-5 p-2 aspect-auto">
                <motion.img
                    src={img}
                    alt="Service"
                    className="object-contain h-[20rem] w-[20rem] rounded-lg aspect-square"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0, 0.5, 0.5, 1.03]
                    }}
                    viewport={{ once: true }}
                />
            </div>
            <div className="w-full pt-10">
                <motion.h1
                    className="text-3xl font-medium flex text-center items-center justify-center mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0, 0.5, 0.5, 1.03]
                    }}
                    viewport={{ once: true }}
                >
                    {name}
                </motion.h1>
                <motion.p
                    className="text-xl flex items-center justify-center text-center md:text-justify px-10 "
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0, 0.5, 0.5, 1.03]
                    }}
                    viewport={{ once: true }}
                >
                    {specialized}
                </motion.p>
            </div>
        </div>
    );
};

const Service = () => {
    const Services = [
        {
            name: "Panchakarma",
            img: "IMGS.png",
            specialized: (
                <span>Panchakarma, a Sanskrit term meaning <strong className='text-[#5FCE55]'>Five-actions</strong> stands as a cornerstone in Ayurvedic medicine, offering a holistic approach to detoxification and rejuvenation. The five Procedures <strong className='text-[#5FCE55]'> Vamana</strong>, <strong className='text-[#5FCE55]'>Virechana</strong>, <strong className='text-[#5FCE55]'>Basti</strong>, <strong className='text-[#5FCE55]'> Nasya</strong>, and <strong className='text-[#5FCE55]'>Raktamokshana aim</strong> to cleanse the body of toxins and restore balance. From controlled vomiting to medicated enemas and bloodletting, each method targets specific bodily systems, promoting overall well-being, improved immunity, and a harmonized dosha balance.
                </span>),
            path: "services/panchakarma",
        },
        {
            name: "Garbhsanskar",
            img: "garbhsanskar.png",
            specialized: (<span> Garbhsanskar, rooted in <strong className='text-[#5FCE55]'>Anciant Ayurvedic wisdom</strong>, focuses on nurturing the unborn child <strong className='text-[#5FCE55]'>during pregnancy</strong>. This practice recognizes the profound impact of the mother's physical, mental, and emotional state on the developing fetus. Through <strong className='text-[#5FCE55]'>positive influences</strong>such as meditation, music, and a healthy lifestyle, Garbhsanskar aims to optimize the child's holistic development. Education for expectant parents about creating a positive and nurturing environment further contributes to the <strong className='text-[#5FCE55]'>well-being of both mother and child.</strong> </span>),
            path: "services/garbhsanskar",
        },
        {
            name: "Agni Karma",
            img: "IMGS.png",
            specialized: (<span>Agni Karma, an <strong className='text-[#5FCE55]'>Ayurvedic therapeutic procedure</strong>, involves the controlled application of heat to address various health issues, particularly localized pain and inflammation. This method includes the targeted application of heat through herbal pastes or heated instruments, <strong className='text-[#5FCE55]'>stimulating circulation</strong> and <strong className='text-[#5FCE55]'>reducing inflammation</strong>. By balancing the doshas and enhancing the body's natural healing processes,<strong className='text-[#5FCE55]'> Agni Karma proves valuable in alleviating pain, promoting recovery</strong>, and contributing to the overall harmony of the individual's health.</span>),
            path: "services/agnikarma",
        },
    ];

    return (
        <div id="services" className="p-5 overflow-hidden">
            <div className="text-4xl font-semibold pt-[3rem] md:pt-[8rem] px-4">Our
                <span className="text-[#5FCE55]"> Service</span>
            </div>
            <div className="h-px my-4  border-[2px] border-black" />
            {/* services Start from Here */}
            <div>
                {Services.map((data, index) => (
                    <ServiceCard
                        key={index}
                        name={data.name}
                        img={data.img}
                        specialized={data.specialized}
                        path={data.path}
                        isEven={index % 2 === 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default Service;
