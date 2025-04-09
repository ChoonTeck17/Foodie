import React, { useState } from "react";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      category: "FAQ's",
      questions: [
        {
          question: "What ingredients do you use in your dishes?",
          answer:
            `We prioritize using the freshest, highest-quality ingredients available. Our menu features seasonal 
            produce sourced from local farms whenever possible. We also use sustainable seafood, responsibly raised 
            meats, and a variety of herbs and spices to create flavorful and wholesome dishes.`,
        },
        {
          question: "Are you certified by any food safety or quality organizations?",
          answer:
            `Yes, we are committed to maintaining the highest standards of food safety and 
            quality. We are certified by HACCP, ISO 22000, and multiple local health departments.`,
        },
        {
          question: "How do you ensure customer satisfaction?",
          answer:
            `We strive to provide an exceptional dining experience for every guest. We are dedicated to providing 
            prompt, friendly, and attentive service. We welcome feedback and are always ready to address any concerns 
            or complaints promptly.`,
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800">About Tomato</h1>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          At <span className="font-bold text-green-600">Tomato</span>, we believe that exceptional dining shouldn't be mutually exclusive to a healthy lifestyle. 
          That's why we created a menu featuring innovative, natural dishes that are as pleasing to the palate as they are nourishing.
        </p>
      </div>

      {faqData.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">{category.category}</h2>
          <div className="space-y-4">
            {category.questions.map((item, idx) => (
              <div key={idx} className="border border-gray-300 rounded-lg shadow-sm">
                <button
                  onClick={() => toggleQuestion(`${index}-${idx}`)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left bg-gray-100 hover:bg-gray-200 transition-colors duration-200 rounded-lg focus:outline-none"
                >
                  <span className="text-gray-800 font-medium">{item.question}</span>
                  <span className="text-gray-500">
                    {openQuestion === `${index}-${idx}` ? "▲" : "▼"}
                  </span>
                </button>
                {openQuestion === `${index}-${idx}` && (
                  <div className="px-6 py-4 bg-white text-gray-700 border-t border-gray-200 rounded-b-lg">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
