import React from 'react'


const Card = ({ name, degree, img, specialized }) => {
    return (
        <div className=" w-80 bg-[#EBEBEB] rounded-lg shadow-lg p-10">
            <img className="flex h-48  rounded-xl shadow-lg items-center" src={img} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-xl font-bold  text-black">{name}</h5>
                <p className="mb-3 font-semibold text-[#5FCE55]">{degree}</p>
                <p className="mb-3 font-semibold text-[#7E7E7E]">{specialized}</p>
            </div>
        </div>
    );
};

const Aboutus = () => {

    const data = [
        {
            name: "Dr. Umesh Detroja",
            degree: "B.A.M.S. & D.P.K.",
            img: "",
            specialized: "Ayurved Doctor",
        },
        {
            name: "Dr. Maitree Detroja",
            degree: "B.A.M.S.",
            img: "",
            specialized: "Ayurved Doctor",
        },
        {
            name: "Dr. Chirag Vidja",
            degree: "B.A.M.S. & M.D.",
            img: "",
            specialized: "Ayurved Doctor",
        },
    ];

    return (
        <>
            <div className="contain">
                {/* Name */}
                <div className="text-4xl font-semibold ">Our <span className='text-[#5FCE55]' >Supporting</span> Team</div>
                <div className="h-px my-4  border-[2px] border-black" />
                {/* Team card */}
                <div className='md:my-24 my-12 flex flex-wrap md:flex-row gap-5 justify-center ' >
                    {data.map((data) => (
                        <Card name={data.name} img={data.img} degree={data.degree} specialized={data.specialized} />
                    ))}
                </div>
                {/* tag line */}
                <p className='flex md:text-3xl text-lg font-semibold text-[#5FCE55] justify-center italic underline  decoration-[#5FCE55]'>"Ayurveda: The ancient wisdom of healing"</p>
            </div>


        </>
    )
}

export default Aboutus
