import React from 'react';
import { menu_list } from '../../assets/assets';

export const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      <h1 className="text-[#262626] font-medium">Explore our menu</h1>
      <p className="max-w-[160%] text-red-500 md:max-w-full md:text-sm">
        Choose the menu
      </p>
      <div className="flex justify-between items-center gap-[30px] text-center my-5 ">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))}
            className="cursor-pointer"
          >
            <img
              src={item.menu_image}
              alt=""
              className={`w-[7.5vw] min-w-[80px] rounded-full transition-all duration-200 ${
                category === item.menu_name ? 'border-4 border-tomato p-[2px]' : ''
              }`}
            />
            <p className="mt-2 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="my-2 h-[2px] bg-[#e2e2e2] border-none" />
    
    </div>

    
  );
};
