import { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { faqData } from "../utils/data";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="md:w-3/4 w-full mx-auto p-6">
      <h2 className="text-6xl font-bold mb-8 text-gray-700">FAQ</h2>
      <div className="mb-24">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b-2 overflow-hidden border-gray-300 py-4"
          >
            {/* TOGGLE BUTTON */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-800 focus:outline-none"
            >
              <span className="uppercase font-semibold text-gray-500">
                {item.question}
              </span>
              <div
                className={`relative w-5 h-5 flex items-center justify-center`}
              >
                <div
                  className={`absolute bg-gray-500 w-1 h-5 transition-transform ${
                    activeIndex === index ? "rotate-90" : "rotate-90"
                  }`}
                ></div>
                <div
                  className={`absolute bg-gray-500 w-5 h-1 transition-transform ${
                    activeIndex === index ? "rotate-0" : "rotate-90"
                  }`}
                ></div>
              </div>
            </button>

            {/* Accordion Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="px-4 py-3 bg-white text-gray-400">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <h2 className="uppercase text-lg font-bold text-gray-500">
          still have questions? we're happy yo help!
        </h2>
        <Link to="/contact-us">
          <Button className="text-gray-700 hover:bg-gray-400 hover:text-white">
            Contact us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
