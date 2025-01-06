import React from "react";
import goldImage from "../assets/Gold.jpg";
import happyImage from "../assets/happy.jpeg";
import thumbsImage from "../assets/thumbs.jpg";

const Body = () => {
  const achievements = [
    {
      img: goldImage,
      title: "10,000+ Happy Customers",
      description: "We have served thousands of satisfied food lovers.",
    },
    {
      img: happyImage,
      title: "Award-Winning Recipes",
      description: "Recognized for our unique and delicious recipes.",
    },
    {
      img: thumbsImage,
      title: "5-Star Ratings",
      description: "Consistently rated highly by our customers.",
    },
  ];

  return (
    <section className="bg-gradient-to-b  py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 tracking-wide">
          Our Achievements
        </h2>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md p-8 text-center transform hover:scale-105 transition-transform duration-300 ease-out group hover:shadow-xl"
            >
              {/* Decorative Gradient Border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400 to-pink-400 opacity-30 blur-lg group-hover:opacity-60 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <img
                  src={achievement.img}
                  alt={achievement.title}
                  className="mx-auto mb-6 w-20 h-20 rounded-full object-cover shadow-lg scale-80"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Body;
