import React from "react";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div id="app-download" className=" text-white py-16 px-8">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
          Experience Tomato on the Go!  
        </h2>
        <p className="text-lg md:text-xl font-light mb-10">
          For a seamless experience, download our mobile app today!
        </p>

        {/* App Download Buttons */}
        <div className="flex justify-center gap-6">
          <img
            src={assets.play_store}
            alt="Download on Google Play"
            className="w-48 md:w-56 transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={assets.app_store}
            alt="Download on the App Store"
            className="w-48 md:w-56 transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Decorative Elements */}

      </div>
    </div>
  );
};

export default AppDownload;
