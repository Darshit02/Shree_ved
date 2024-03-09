import React, { useEffect } from "react";
import { Navbar } from "./components";
import ScrollToTopButton from "./components/UI/ScrollTop";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Panchakarma from "./pages/Panchakarma";
import Garbhsanskar from "./pages/Garbhsanskar";
import AgniKarma from "./pages/AgniKarma";
import Home from "./pages/Home";
import Footer from "./components/Footer"


const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts or updates
  }, []);
  


  return (
    <>
      <div className="">
        <div className="bg-[#F6FCEE] scrollbar-hide" >
          <Navbar />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="services/panchakarma" element={<Panchakarma />} />
              <Route path="services/garbhsanskar" element={<Garbhsanskar />} />
              <Route path="services/agnikarma" element={<AgniKarma />} /> */}
            </Routes>
          </Router>
          <Footer />
          <ScrollToTopButton />
        </div>
      </div>
    </>
  );
};

export default App;
