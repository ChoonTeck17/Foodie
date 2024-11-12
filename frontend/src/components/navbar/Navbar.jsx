import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';


 const Navbar = ({setShowLogin}) => {

   const[menu, setMenu] = useState("Menu");
   return (
     <div className='navbar'>
       <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link> 
        <ul className="navbar-menu">
            <Link to='/'onClick={()=>setMenu("Home")}className={menu==="Home"?"active":""}>Home</Link>
            <a href='#xplore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("Mobile")} className={menu==="Mobile"?"active":""}>Mobile App</a>
            <a href='#footer' onClick={()=>setMenu("ContactUs")} className={menu==="ContactUs"?"active":""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt=""  />
            <div className="navbar-search-icon"> 
                <Link to='/cart'><img src={assets.basket_icon} alt="" className="" /></Link>
                <div className="dot"></div>
            </div>
            <button className="bg-red-500 hover:bg-hover-gray text-white font-bold py-2 px-4 rounded-full" onClick={()=>setShowLogin(true)}>Sign In</button>
            
        </div>
     </div>
   )
 }
 
 export default Navbar