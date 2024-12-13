import React, { useContext, useState } from 'react'
// import './Navbar.css'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { use } from 'react';
import { StoreContext } from '../../context/StoreContext';


 const Navbar = ({setShowLogin}) => {

   const[menu, setMenu] = useState("Menu");
   const {getTotalCartAmount} = useContext(StoreContext)

   return (
    <div className="navbar py-5 px-6 flex justify-between items-center bg-white shadow-md">
       <Link to="/"><img src={assets.logo} alt="Logo" className="logo w-[150px]" /></Link>

        <ul className="flex list-none gap-8 text-[#49557e] text-lg">
          <Link to="/" onClick={() => setMenu("Home")} className={`hover:text-blue-600 transition-colors duration-300 ${ menu === "Home" ? "font-bold text-blue-600" : ""}`}>
            Home
          </Link>
          <a href="#xplore-menu" onClick={() => setMenu("Menu")} className={`hover:text-blue-600 transition-colors duration-300 ${ menu === "Menu" ? "font-bold text-blue-600" : "" }`}>
            Menu
          </a>
          <a href="#app-download" onClick={() => setMenu("Mobile")} className={`hover:text-blue-600 transition-colors duration-300 ${ menu === "Mobile" ? "font-bold text-blue-600" : "" }`} >
            Mobile App
          </a>
          <a href="#footer" onClick={() => setMenu("ContactUs")} className={`hover:text-blue-600 transition-colors duration-300 ${ menu === "ContactUs" ? "font-bold text-blue-600" : "" }`}>
            Contact Us
          </a>
        </ul>

  {/* Right Section */}
      <div className="navbar-right flex items-center gap-6">
            <img src={assets.search_icon} alt="Search" className="w-6 h-6" />

            <div className="relative">
              <Link to="/cart">
                <img src={assets.basket_icon} alt="Cart" className="w-6 h-6" />
              </Link>
              
              {getTotalCartAmount() !== 0 && (<div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></div>)}
            </div>

            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300" onClick={() => setShowLogin(true)}>
              Sign In
            </button>
      </div>
    </div>


   )
 }
 
 export default Navbar