import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import { Navbar } from "./components";
import Contectus from "./components/Contectus";
import Team from "./components/Team"
import Home from "./components/Home";
import Footer from "./components/Footer";

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
