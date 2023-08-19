import { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex flex-col items-center my-20">
      <h1 className="lg:text-4xl text-2xl uppercase font-bold pt-10 md:pt-3 text-sky-950 text-center">
        Pricing Plans
      </h1>
      <h2>Hello Changed </h2>
      <p className="text-gray-500 mb-4">
        Choose the plan that fits your needs.
      </p>
      <button
        onClick={() => setIsYearly(!isYearly)}
        className={`py-2 px-4 rounded-full ${
          isYearly ? "bg-blue-400 text-white" : "bg-green-600 text-white"
        } mb-4 hover:bg-blue-500 hover:text-white transition duration-300 focus:outline-none`}
      >
        {isYearly ? "Switch to Monthly" : "Switch to Yearly"}
      </button>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="bg-yellow-200 rounded-lg shadow-lg p-6 w-64 m-4">
          <h2 className="text-xl font-semibold mb-4">Free Plan</h2>
          <p className="text-gray-600 mb-2">Access to demos</p>
          <p className="text-gray-700">Free</p>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded mt-2">
            Select
          </button>
        </div>
        <div className="bg-blue-400 rounded-lg shadow-lg p-6 w-64 m-4">
          <h2 className="text-xl font-semibold mb-4">Basic Plan</h2>
          <p className="text-gray-600 mb-2">Limited features</p>
          <p className="text-gray-700">
            {isYearly ? "$100/year" : "$10/month"}
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">
            Select
          </button>
        </div>
        <div className="bg-green-400 rounded-lg shadow-lg p-6 w-64 m-4">
          <h2 className="text-xl font-semibold mb-4">Prime Plan</h2>
          <p className="text-gray-600 mb-2">Enhanced features</p>
          <p className="text-gray-700">
            {isYearly ? "$200/year" : "$20/month"}
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded mt-2">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
