import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Details from "../pages/Details";
import { Route, Routes } from "react-router-dom";

const AppRouter = ({ darkMode, handleDarkMode }) => {
  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Navbar handleDarkMode={handleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:login" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
