import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [oldUser, setOldUser] = useState(false);
  const { user } = useContext(AuthContext);
  const email = user?.email;
  // console.log(user?.email);
  useEffect(() => {
    if (!user) {
      setOldUser(true);
    } else {
      fetch(`https://profit-prime-server.vercel.app/user/${email}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          if (data?.userRole === "yearlyBasic" || data?.userRole === "yearlyPrime" || data?.userRole === "monthlyBasic" || data?.userRole === "monthlyPrime") {
            setOldUser(true);
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          // Handle the error here, e.g., display an error message to the user
        });
    }
  }, [email, user]);
  
  const navigate = useNavigate();
  const handleFree = () => {
    navigate("/free");
  };
  const handlePaymentBasic = () => {
    navigate(
      `/payment/${encodeURIComponent("Basic")}/${
        isYearly ? "yearly" : "monthly"
      }`
    );
  };
  const handlePaymentPrime = () => {
    navigate(
      `/payment/${encodeURIComponent("Prime")}/${
        isYearly ? "yearly" : "monthly"
      }`
    );
  };
  {
    user ? (
      <></>
    ) : (
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Please Login",
        showConfirmButton: false,
        timer: 1500,
      })
    );
  }
  return (
    <div className="flex flex-col items-center mb-16 md:mb-32">
      <Helmet>
        <title>ProfitPrime | Pricing</title>
      </Helmet>

      <div className="text-center my-16 md:mt-32 md:mx-64">
        <p className="text-red-800">
          ---Choose the plan that fits your needs.---
        </p>
        <h3 className="md:text-2xl font-bold border-purple-900 border-y-4 py-2 uppercase text-red-800">
          Pricing Plans
        </h3>
      </div>
      <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`py-2 px-4 rounded-full bg-red-800 hover:bg-purple-900  text-white${
            isYearly ? "bg-blue-400 text-white" : "bg-green-900 text-white"
          } mb-4 hover:bg-green-700 hover:text-white transition duration-300 focus:outline-none`}
        >
          {isYearly ? "Switch to Monthly" : "Switch to Yearly"}
        </button>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-center pl-4">
        <div className="bg-yellow-200 rounded-lg shadow-lg p-6 w-64 m-3 hover:bg-purple-300 transition duration-300">
          <h2 className="text-xl text-red-800 font-semibold mb-4">Free Plan</h2>
          <p className="text-black mb-2">Access to demos</p>
          <p className="text-black mb-4">Free</p>

          <button
            onClick={handleFree}
            className={`${
              oldUser
                ? " opacity-50 cursor-not-allowed bg-red-800 hover:bg-purple-950 text-white py-2 px-4 rounded mt-2"
                : "bg-red-800 hover:bg-purple-950 text-white py-2 px-4 rounded mt-2"
            }`}
            disabled={oldUser}
          >
            Select
          </button>
        </div>
        <div className="bg-blue-400 rounded-lg shadow-lg p-6 w-64 m-3 hover:bg-purple-300 transition duration-300">
          <h2 className="text-xl text-red-800 font-semibold mb-4 ">
            Basic Plan
          </h2>
          <p className="text-black mb-2">Limited features</p>
          <p className="text-black mb-4">
            {isYearly ? "$100/year" : "$10/month"}
          </p>
          <div className="mt-2">
            <button
              onClick={handlePaymentBasic}
              className={`${
                oldUser
                  ? " opacity-50 cursor-not-allowed bg-red-800 hover:bg-purple-950 text-white py-2 px-4 rounded mt-2"
                  : "bg-red-800 hover:bg-purple-950 text-white py-2 px-4 rounded mt-2"
              }`}
              disabled={oldUser}
            >
              Select
            </button>
          </div>
        </div>
        <div className="bg-green-400 rounded-lg shadow-lg p-6 w-64 m-3 hover:bg-purple-300 transition duration-300">
          <h2 className="text-xl text-red-800 font-semibold mb-4">
            Prime Plan
          </h2>
          <p className="text-black mb-2">Enhanced features</p>
          <p className="text-black mb-4">
            {isYearly ? "$200/year" : "$20/month"}
          </p>
          <div className="mt-2">
            <button
              onClick={handlePaymentPrime}
              className={`${
                oldUser
                  ? " opacity-50 cursor-not-allowed bg-red-800 hover:bg-purple-950 text-white py-2 px-4 rounded mt-2"
                  : "bg-red-800 hover:bg-purple-950 text-white py-2 px-4 rounded mt-2"
              }`}
              disabled={oldUser}
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
