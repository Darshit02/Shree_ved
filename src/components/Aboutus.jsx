import React from 'react'

const Card = ({ name, degree, img, specialized }) => {
    return (
        <div class=" w-80 bg-[#EBEBEB] rounded-lg shadow-lg p-10">
            <img class="flex h-48  rounded-xl shadow-lg items-center" src={img} alt="" />
            <div class="p-5">
                <h5 class="mb-2 text-xl font-bold  text-black">{name}</h5>
                <p class="mb-3 font-semibold text-[#5FCE55]">{degree}</p>
                <p class="mb-3 font-semibold text-[#7E7E7E]">{specialized}</p>
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
                <div className='my-24 flex flex-wrap md:flex-row gap-5 justify-center ' >
                    {data.map((data) => (
                        <Card name={data.name} img={data.img} degree={data.degree} specialized={data.specialized} />
                    ))}
                </div>
                {/* tag line */}
                <p className='flex text-3xl font-semibold text-[#5FCE55] justify-center italic underline  decoration-[#5FCE55]'>"Ayurveda: The ancient wisdom of healing"</p>
            </div>


        </>
    )
}

export default Aboutus
