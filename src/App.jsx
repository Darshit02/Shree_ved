import React from "react";
import { Navbar } from "./components";
import Contectus from "./components/Contectus";
import Aboutus from "./components/Aboutus"
import Home from "./components/Home";

// logo file Added so use that

const App = () => {
  return (
    <>
    <div>
      <Navbar />
      <Home/>
      <Aboutus />
      <Contectus />
      </div>
    </>
  );
};

export default App;
