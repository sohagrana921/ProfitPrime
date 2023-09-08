import { useState } from 'react';

const AboutUs = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div id="about" className="flex justify-center items-center my-container mt-24">
      <div className="container mx-auto md:flex items-center">
        <div className="md:w-1/2 px-5 md:ml-10 mt-5 md:mt-0">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700 mb-6 text-justify">
            {showFullText
              ? "Our Company Revenue Generation Platform website project is your gateway to enhanced growth and prosperity. Through our innovative products, transparent pricing, and powerful features, we empower your business to easily optimize revenue strategies. Embrace technology's potential to streamline operations, boost customer engagement, and amplify profits. This marks a new chapter in revenue generation, propelling your business towards efficiency, competitiveness, and lasting triumph. Welcome to the future of revenue excellence. Maximize profits effortlessly with our Revenue Generation Platform. Harness data-driven insights, optimize strategies, and elevate customer engagement for exponential growth."
              : "Our Company Revenue Generation Platform website project is your gateway to enhanced growth and prosperity. Through our innovative products, transparent pricing, and powerful features, we empower your business to easily optimize revenue strategies."}
          </p>
          
          <div className="flex space-x-4">
          {!showFullText && (
            <button
              onClick={toggleFullText}
              className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-900 transition duration-300"
            >
              Learn More
            </button>
          )}
            <a
              href="#contact"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="md:w-1/2 py-12">
          <img
            src="https://img.freepik.com/premium-vector/profit-money-budget-cash-rising-graph-arrow-up-concept-business-success-capital-earnings-benefit-stock-illustration_100456-1704.jpg?w=2000"
            alt="About Us Image"
            className="w-full h-auto md:max-w-lg mx-auto rounded-lg  px-10"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
