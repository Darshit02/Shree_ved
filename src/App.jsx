import React, { useEffect } from "react";
import { Navbar } from "./components";
import Contectus from "./components/Contectus";
import Team from "./components/Team"
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import ScrollToTopButton from "./components/UI/ScrollTop";




const App = () => {

  return (
    <div className="">
      <div className="bg-[#F6FCEE] scrollbar-hide" >
        <Navbar />
        <Home />
        <AboutUs />
        <Service />
        <Team />
        <Contectus />
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default App;
