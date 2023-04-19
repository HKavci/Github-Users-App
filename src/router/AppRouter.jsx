import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Footer from "../components/Footer";
import Details from "../pages/Details";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";

const AppRouter = ({darkMode, handleDarkMode}) => {
  return (
    <>
      <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:login" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
