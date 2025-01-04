import React from 'react';
import { menu_list } from '../../assets/assets';

export const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-6 px-4 md:px-8 lg:px-16" id="explore-menu">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 tracking-wide mb-6">
        Have a look at our menu
      </h1>

      {/* Menu Items */}
      <div className="flex flex-wrap justify-center gap-5 sm:gap-8 md:gap-10 lg:gap-12">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))}
            className="cursor-pointer flex flex-col items-center"
          >
            {/* Image */}
            <img
              src={item.menu_image}
              alt=""
              className={`w-[18vw] sm:w-[13vw] md:w-[9vw] lg:w-[7vw] min-w-[70px] max-w-[130px] rounded-full transition-all duration-200 ${
                category === item.menu_name ? 'border-4 border-tomato p-[2px]' : ''
              }`}
            />
            {/* Text */}
            <p className="mt-2 text-gray-600 text-sm md:text-base lg:text-lg">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>

      {/* Separator */}
      <hr className="my-4 h-[2px] bg-gray-300 border-none" />
    </div>
  );
};
