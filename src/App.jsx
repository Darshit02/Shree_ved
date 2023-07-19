import React from "react";
import { Navbar } from "./components";
import Contectus from "./components/Contectus";
import Aboutus from "./components/Aboutus"

// logo file Added so use that

const App = () => {
  return (
    <div>
      <Navbar />
      <Aboutus />
      <Contectus />
    </div>
  );
};

export default App;
