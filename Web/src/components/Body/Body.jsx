import React from 'react';

const Body = () => {
  const reasons = [
    {
      title: 'Fresh Ingredients',
      description: 'We use only the freshest ingredients to prepare your meals.',
      icon: 'https://via.placeholder.com/50',
    },
    {
      title: 'Experienced Chefs',
      description: 'Our chefs are experts in creating mouthwatering dishes.',
      icon: 'https://via.placeholder.com/50',
    },
    {
      title: 'Fast Delivery',
      description: 'Enjoy your favorite meals delivered to your doorstep quickly.',
      icon: 'https://via.placeholder.com/50',
    },
  ];

  const achievements = [
    {
      title: '10,000+ Happy Customers',
      description: 'We have served thousands of satisfied food lovers.',
      icon: 'https://via.placeholder.com/50',
    },
    {
      title: 'Award-Winning Recipes',
      description: 'Recognized for our unique and delicious recipes.',
      icon: 'https://via.placeholder.com/50',
    },
    {
      title: '5-Star Ratings',
      description: 'Consistently rated highly by our customers.',
      icon: 'https://via.placeholder.com/50',
    },
  ];

  return (
    <>
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className="mx-auto mb-4 w-12 h-12"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {reason.title}
                </h3>
                <p className="mt-2 text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  src={achievement.icon}
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
    </>
  );
};

export default Body;
