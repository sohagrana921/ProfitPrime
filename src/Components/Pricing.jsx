import { useState } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex flex-col items-center mb-32">
      <div className="text-center my-16 md:my-32 md:mx-64">
        <p className="text-red-800">---Choose the plan that fits your needs.---</p>
        <h3 className="md:text-2xl font-bold border-purple-900 border-y-4 py-2 uppercase text-red-800"> Pricing Plans</h3>
      </div>
      <button
        onClick={() => setIsYearly(!isYearly)}
        className={`py-2 px-4 rounded-full bg-red-800 hover:bg-purple-900  text-white${isYearly ? "bg-blue-400 text-white" : "bg-green-900 text-white"
          } mb-4 hover:bg-green-700 hover:text-white transition duration-300 focus:outline-none`}
      >
        {isYearly ? "Switch to Monthly" : "Switch to Yearly"}
      </button>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="bg-yellow-200 rounded-lg shadow-lg p-6 w-64 m-4">
          <h2 className="text-xl text-red-800 font-semibold mb-4">Free Plan</h2>
          <p className="text-black mb-2">Access to demos</p>
          <p className="text-black mb-4">Free</p>
          <Link
            to="/free"
            className="bg-red-800 hover:bg-purple-950 text-white py-2 px-4 rounded mt-2"
          >
            Select
          </Link>
        </div>
        <div className="bg-blue-400 rounded-lg shadow-lg p-6 w-64 m-4">
          <h2 className="text-xl text-red-800 font-semibold mb-4">Basic Plan</h2>
          <p className="text-black mb-2">Limited features</p>
          <p className="text-black mb-4">
            {isYearly ? "$100/year" : "$10/month"}
          </p>
          <div className="mt-2">
            <Link
              to={`/payment/${encodeURIComponent("Basic")}/${isYearly ? "yearly" : "monthly"
                }`}
              className="bg-red-800 hover:bg-purple-950 text-white py-2 px-4 rounded mt-2"
            >
              Select
            </Link>
          </div>
        </div>
        <div className="bg-green-400 rounded-lg shadow-lg p-6 w-64 m-4">
          <h2 className="text-xl text-red-800 font-semibold mb-4">Prime Plan</h2>
          <p className="text-black mb-2">Enhanced features</p>
          <p className="text-black mb-4">
            {isYearly ? "$200/year" : "$20/month"}
          </p>
          <div className="mt-2">
            <Link
              to={`/payment/${encodeURIComponent("Prime")}/${isYearly ? "yearly" : "monthly"
                }`}
              className="bg-red-800 hover:bg-purple-950 text-white py-2 px-4 rounded mt-2"
            >
              Select
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
