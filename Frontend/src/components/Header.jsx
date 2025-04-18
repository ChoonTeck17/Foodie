import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div
      className="relative h-[34vw] mx-auto my-8 bg-no-repeat bg-contain bg-center"
      style={{ backgroundImage: "url('./header_img.png')" }}
    >
      {/* Header Content */}
      <div className="absolute bottom-[10%] left-[6vw] flex flex-col items-start gap-[1.5vw] max-w-[50%] animate-fadeIn md:max-w-[45%] sm:max-w-[70%]">
        <h2 className="text-white font-medium text-[max(4.5vw,22px)] leading-tight">
          Order your favorite food here
        </h2>
        <p className="text-white text-[1vw] sm:hidden">
          Choose your food bro
        </p>

        <Link
          to="/Menu"
          onClick={() => {
            setMenu("Menu");
            setIsMobileMenuOpen(false);
          }}
        >
          <button className="bg-white text-gray-500 font-medium rounded-full px-[1.5vw] py-[0.6vw] text-[max(0.8vw,12px)] sm:px-[3vw] sm:py-[1.2vw]">
            View Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
 