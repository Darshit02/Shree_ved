import React from 'react'
import Hero from '../components/Hero'
import Contectus from "../components/Contectus";
import Team from "../components/Team"
import AboutUs from "../components/AboutUs";
import Service from "../components/Service";

function Home() {
    return (
        <div>
            <Hero />
            <AboutUs />
            <Service />
            <Team />
            <Contectus />

        </div>
    )
}

export default Home
