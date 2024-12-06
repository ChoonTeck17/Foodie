import React from "react";
import { assets } from "../../assets/assets";

export const Footer = () => {
  return (
<footer className="bg-gray-900 text-gray-300 py-8 px-8 md:px-[8vw] mt-16">
  {/* Main Container */}
  <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
    {/* Left Section */}
    <div className="flex flex-col gap-4">
      <img src={assets.logo} alt="Logo" className="w-20" />
      <p className="text-sm">
        Tomato delivers the freshest meals with care. <br></br>Taste the difference with every bite!
      </p>
      <div className="flex gap-4">
        <img
          src={assets.facebook_icon}
          alt="Facebook"
          className="w-6 hover:scale-110 transition-transform duration-200"
        />
        <img
          src={assets.twitter_icon}
          alt="Twitter"
          className="w-6 hover:scale-110 transition-transform duration-200"
        />
        <img
          src={assets.linkedin_icon}
          alt="LinkedIn"
          className="w-6 hover:scale-110 transition-transform duration-200"
        />
        <img
          src={assets.instagram_icon}
          alt="Instagram"
          className="w-6 hover:scale-110 transition-transform duration-200"
        />
      </div>
    </div>

    {/* Center Section - Links */}
    <div className="flex flex-col gap-4">
      <h2 className="text-white text-base font-semibold">Quick Links</h2>
      <ul className="space-y-2">
        <li className="cursor-pointer hover:text-white transition-colors duration-200">Home</li>
        <li className="cursor-pointer hover:text-white transition-colors duration-200">About Us</li>
        <li className="cursor-pointer hover:text-white transition-colors duration-200">Delivery Info</li>
        <li className="cursor-pointer hover:text-white transition-colors duration-200">Privacy Policy</li>
        <li className="cursor-pointer hover:text-white transition-colors duration-200">FAQs</li>
      </ul>
    </div>

    {/* Right Section - Contact Info */}
    <div className="flex flex-col gap-4">
      <h2 className="text-white text-base font-semibold">Get in Touch</h2>
      <p className="text-sm">
        <span className="block">Phone: 016-233 2378</span>
        <span className="block">Location: Kuala Lumpur, Malaysia</span>
      </p>
    </div>
  </div>

  {/* Divider */}
  <hr className="my-6 border-gray-700" />

  {/* Bottom Row */}
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-sm text-gray-400">© 2024 Tomato. All rights reserved.</p>
    <ul className="flex gap-4 text-sm text-gray-400">
      <li className="cursor-pointer hover:text-white">Terms of Service</li>
      <li className="cursor-pointer hover:text-white">Refund Policy</li>
    </ul>
  </div>
</footer>




  );
};

export default Footer;
