import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Footer from "../components/Footer";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/Details";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:login" element={<Details />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/details" element={<PrivateRouter />}>
        </Route> */}
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
