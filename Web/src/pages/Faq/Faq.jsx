// Import React and useState
import React, { useState } from "react";

const FAQPage = () => {
  // Define questions and answers
  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
    },
    {
      question: "How do I use Tailwind CSS with React?",
      answer: "You can use Tailwind CSS with React by installing it via npm or yarn and configuring it in your project.",
    },
  ];

  // Manage which FAQ is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle the visibility of the answer
  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <button
              className="flex justify-between items-center w-full text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  expandedIndex === index ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {expandedIndex === index && (
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
