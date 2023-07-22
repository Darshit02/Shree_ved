import React from "react";
import { Navbar } from "./components";
import Contectus from "./components/Contectus";
import Team from "./components/Team"
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

// logo file Added so use that

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Team />
      <Contectus /> 
      <Footer /> 
    </>
  );
};

export default App;
