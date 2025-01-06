import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
// import Login from "../Login/Login"; // Import Login modal component

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalCartAmount } = useContext(StoreContext);

  return (

      <nav className="navbar py-4 px-6 lg:px-12 flex justify-between items-center bg-white shadow-md">
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="logo w-[100px] lg:w-[150px]" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex list-none gap-8 text-[#49557e] text-lg">
          <Link to="/"
            onClick={() => setMenu("Home")} className={`hover:text-blue-600 transition-colors duration-300 ${menu === "Home" ? "font-bold text-blue-600" : ""}`}
          >
            Home
          </Link>
          <Link to="/Menu"
            onClick={() => {setMenu("Menu"); setIsMobileMenuOpen(false);}} className={`hover:text-blue-600 transition-colors duration-300 ${menu === "Menu" ? "font-bold text-blue-600" : ""}`}
          >
            Menu
          </Link>

          <a
            href="#app-download" onClick={() => setMenu("Mobile")}className={`hover:text-blue-600 transition-colors duration-300 ${ menu === "Mobile" ? "font-bold text-blue-600" : ""
            }`}
          >
            Mobile App
          </a>
          <Link to="/Faq"
            onClick={() => {setMenu("Faq"); setIsMobileMenuOpen(false);}} className={`hover:text-blue-600 transition-colors duration-300 ${menu === "Faq" ? "font-bold text-blue-600" : ""}`}
          >
            Faq
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#49557e] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <img src={assets.menu_icon} alt="Menu" className="w-6 h-6" />
        </button>

        {/* Right Section */}
        <div className="navbar-right flex items-center gap-4 lg:gap-6">
      

          <div className="relative">
            <Link to="/cart">
              <img
                src={assets.basket_icon}
                alt="Cart"
                className="w-5 h-5 lg:w-6 lg:h-6"
              />
            </Link>
            {getTotalCartAmount() !== 0 && (
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
            )}
          </div>


        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden">
            <ul className="flex flex-col gap-4 p-4 text-[#49557e] text-base">
              <Link
                to="/"
                onClick={() => {
                  setMenu("Home");
                  setIsMobileMenuOpen(false);
                }}
                className={`hover:text-blue-600 transition-colors duration-300 ${
                  menu === "Home" ? "font-bold text-blue-600" : ""
                }`}
              >
                Home
              </Link>
              <a
                href="#explore-menu"
                onClick={() => {
                  setMenu("Menu");
                  setIsMobileMenuOpen(false);
                }}
                className={`hover:text-blue-600 transition-colors duration-300 ${
                  menu === "Menu" ? "font-bold text-blue-600" : ""
                }`}
              >
                Menu
              </a>
              <a
                href="#app-download"
                onClick={() => {
                  setMenu("Mobile");
                  setIsMobileMenuOpen(false);
                }}
                className={`hover:text-blue-600 transition-colors duration-300 ${
                  menu === "Mobile" ? "font-bold text-blue-600" : ""
                }`}
              >
                Mobile App
              </a>
              <a
                href="#footer"
                onClick={() => {
                  setMenu("Faq");
                  setIsMobileMenuOpen(false);
                }}
                className={`hover:text-blue-600 transition-colors duration-300 ${
                  menu === "Faq" ? "font-bold text-blue-600" : ""
                }`}
              >
                Faq
              </a>
            </ul>
          </div>
        )}
      </nav>
  );
};

export default Navbar;
