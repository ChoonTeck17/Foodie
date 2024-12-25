// Import React and useState
import React, { useState } from "react";

const FAQPage = () => {
  // Define questions and answers
  const faqs = [
    {
      question: "What ingredients do we use?",
      answer: "We use only the freshest and highest-quality ingredients in all our products.",
    },
    {
      question: "How do we ensure customer satisfaction?",
      answer: "Customer satisfaction is our top priority. We have a dedicated support team and a no-questions-asked return policy.",
    },
    {
      question: "Why choose us?",
      answer: "We are committed to quality, innovation, and exceptional service that sets us apart from the competition.",
    },
  ];

  // Manage which FAQ is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle the visibility of the answer
  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen flex flex-col items-center justify-center">
        {/* FAQ Section */}
        <div className="max-w-2xl w-full p-6 bg-white rounded-xl shadow-lg mb-12">
          <h1 className="text-3xl font-extrabold text-center text-blue-800 mb-8">Frequently Asked Questions</h1>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-5">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-blue-900">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180 text-blue-600" : "rotate-0 text-gray-600"
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
                <p className="mt-3 text-gray-700 text-base leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* How We Got Started Section */}
      <div className="max-w-4xl w-full p-6 bg-white rounded-xl shadow-lg mb-12 flex flex-col items-center mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6">
            <img
              src="https://via.placeholder.com/400x300" 
              alt="Our beginnings"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">How and When We Started</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We began our journey in 2010 with a mission to bring quality products to our customers. Over the years, we have grown and evolved, always staying true to our values of excellence and customer focus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
