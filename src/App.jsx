import React from "react";
import { Navbar } from "./components";
import Contectus from "./components/Contectus";
import Team from "./components/Team"
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";

// logo file Added so use that

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Team />
      <Contectus /> 
      <Service/>
    <AboutUs/>
    <Footer /> 
      
    </>
  );
};

export default App;
