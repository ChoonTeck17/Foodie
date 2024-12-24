import React from "react";
import { assets } from "../../assets/assets";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-10 px-8 md:px-[8vw] mt-16">
      {/* Main Container */}
      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-start">
        {/* Left Section */}
        <div className="flex flex-col gap-5">
          <img src={assets.logo} alt="Logo" className="w-24" />
          <p className="text-sm leading-relaxed">
            Tomato delivers the freshest meals with care. <br />
            Taste the difference with every bite!
          </p>
          <div className="flex gap-4">
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              aria-label="Facebook"
              className="w-7 hover:scale-125 transition-transform duration-300"
            />
            <img
              src={assets.twitter_icon}
              alt="Twitter"
              aria-label="Twitter"
              className="w-7 hover:scale-125 transition-transform duration-300"
            />
            <img
              src={assets.linkedin_icon}
              alt="LinkedIn"
              aria-label="LinkedIn"
              className="w-7 hover:scale-125 transition-transform duration-300"
            />
            
          </div>
        </div>

        {/* Center Section - Links */}
        <div className="flex flex-col gap-5">
          <h2 className="text-white text-lg font-semibold">Quick Links</h2>
          <ul className="space-y-3">
            {["Home", "About Us", "Delivery Info", "Privacy Policy", "FAQs"].map((link, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-white transition-colors duration-200 text-sm"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Faq Info */}
        <div className="flex flex-col gap-5">
          <h2 className="text-white text-lg font-semibold">Get in Touch</h2>
          <p className="text-sm leading-relaxed">
            <span className="block">Phone: 016-233 2378</span>
            <span className="block">Location: Kuala Lumpur, Malaysia</span>
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">© 2024 Tomato. All rights reserved.</p>
        <ul className="flex gap-6 text-sm text-gray-400">
          {["Terms of Service", "Refund Policy"].map((policy, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-white transition-colors duration-200"
            >
              {policy}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
