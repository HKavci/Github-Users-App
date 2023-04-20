import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Details from "../pages/Details";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";

const AppRouter = ({ darkMode, handleDarkMode }) => {
  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Navbar handleDarkMode={handleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:login" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
