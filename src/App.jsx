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
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contectus/>} />
            {/* Add more routes as needed */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
