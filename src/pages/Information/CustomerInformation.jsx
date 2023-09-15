import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const popularCategories = [
  "Technology",
  "Healthcare",
  "Finance",
  "Retail",
  "Entertainment",
  "E-Commerce",
];

const CustomerInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const [customer, setCustomer] = useState();
  const email = user?.email;
  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://profit-prime-server.vercel.app/user/${email}`)
      .then((response) => {
        setCustomer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customer information:", error);
      });
  }, [email]);

  const defaultName = customer?.name || ""; // Set a default value for name
  const defaultEmail = email || ""; // Set a default value for email

  const onSubmit = (data) => {
    const updatedUserData = {
      name: defaultName,
      email: defaultEmail,
      address: data.address,
      website: data.website,
      contact: data.contact,
      category: data.category,
    };
    console.log(updatedUserData);
    axios
      .post(
        "https://profit-prime-server.vercel.app/update-user-info",
        updatedUserData
      )
      .then((response) => {
        console.log(response.data);
        Navigate("/dashboard/dashhome");
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };

  return (
    <div className="flex flex-col md:flex-row py-16 pt-8 mt-8 justify-center items-center  bg-gradient-to-r from-green-200 via-purple-300 to-green-300">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full px-8">
        <div>
          <h2 className="text-2xl py-5 font-semibold mb-4 text-center text-gray-800 md:mb-0">
            Customer Information
          </h2>
        </div>
        <div className="md:grid grid-cols-2 gap-8 p-10 bg-gray-200 rounded-lg shadow-lg">
          <div>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: 0 })}
                  defaultValue={defaultName}
                  disabled
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: 0,
                    pattern: /^\S+@\S+$/i,
                  })}
                  defaultValue={defaultEmail} // Set default value for email
                  disabled
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                />
                {errors.email?.type === "required" && (
                  <span className="text-red-500">Email is required</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500">Invalid email format</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  {...register("contact", { required: true })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                />
                {errors.contact && (
                  <span className="text-red-500">
                    Contact number is required
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="md:mt">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="category"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Category
                </label>
                <select
                  id="category"
                  {...register("category")}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                >
                  {popularCategories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  {...register("website")}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  {...register("address", { required: true })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                />
                {errors.address && (
                  <span className="text-red-500">Address is required</span>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-2 flex justify-center ">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-3 mt-2 rounded-lg hover:bg-indigo-600 focus:outline-none w-1/3"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomerInformation;
