import React from 'react';
import goldImage from '../../assets/Gold.jpg';
import happyImage from '../../assets/happy.jpeg';
import ratingImage from '../../assets/rating.jpeg';

const Body = () => {

  const achievements = [
    {
      img: goldImage,
      title: '10,000+ Happy Customers',
      description: 'We have served thousands of satisfied food lovers.',
      icon: 'https://via.placeholder.com/50',
    },
    {
      img: happyImage,
      title: 'Award-Winning Recipes',
      description: 'Recognized for our unique and delicious recipes.',
      icon: 'https://via.placeholder.com/50',
    },
    
  ];

  return (

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={achievement.img}
                  alt={achievement.title}
                  className="mx-auto mb-4 w-12 h-12"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {achievement.title}
                </h3>
                <p className="mt-2 text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Body;
