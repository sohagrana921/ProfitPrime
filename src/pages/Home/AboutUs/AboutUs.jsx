const AboutUs = () => {
  return (
    <div className="flex justify-center items-center my-container">
      <div className="container mx-auto md:flex items-center">
        <div className="md:w-1/2 px-5 md:ml-10 mt-5 md:mt-0">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700 mb-6 text-justify">
            Maximize profits effortlessly with our Revenue Generation Platform.
            Harness data-driven insights, optimize strategies, and elevate
            customer engagement for exponential growth.
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
              Learn More
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
        <div className="md:w-1/2 py-12">
          <img
            src="https://img.freepik.com/premium-vector/profit-money-budget-cash-rising-graph-arrow-up-concept-business-success-capital-earnings-benefit-stock-illustration_100456-1704.jpg?w=2000"
            alt="About Us Image"
            className="w-full h-auto md:max-w-lg mx-auto rounded-lg shadow-lg px-10"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
