import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useCallback } from "react";

const popularCategories = [
  "Technology",
  "Healthcare",
  "Finance",
  "Retail",
  "Entertainment",
  "E-Commerce",
];

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const [customer, setCustomer] = useState();
  const [editMode, setEditMode] = useState(false);
  const email = user?.email;

  const fetchCustomerInfo = useCallback(() => {
    axios
      .get(`https://profit-prime-server.vercel.app/user/${email}`)
      .then((response) => {
        setCustomer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customer information:", error);
      });
  }, [email]);

  useEffect(() => {
    // Fetch customer information on initial load
    fetchCustomerInfo();
  }, [email, fetchCustomerInfo]);

  const onSubmit = (data) => {
    const updatedUserData = {
      email,
      address: data.address ? data.address : customer?.address,
      website: data.website ? data.website : customer?.website,
      contact: data.contact ? data.contact : customer?.contact,
      category: data.category ? data.category : customer?.category,
      name: data.name ? data.name : customer?.name,
    };
    console.log(data);
    console.log(updatedUserData);
    axios
      .post(
        "https://profit-prime-server.vercel.app/update-user-info",
        updatedUserData
      )
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Update successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        setEditMode(!editMode);
        fetchCustomerInfo();
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };

  // Function to toggle edit mode
  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="flex flex-col md:flex-row py-16 pt-8 mt-8 justify-center items-center">
      <div>

      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full px-8">
        <div>
          <div className="text-center my-16 md:my-10 md:mx-64">
            <p className="text-red-800">---{customer?.userRole} plan---</p>
            <h3 className="md:text-2xl font-bold border-purple-900 border-y-4 py-2 uppercase text-red-800">Your Profile</h3>
          </div>
          <div className="py-2 font-semibold mb-4 text-center text-gray-800 md:mb-0">
            <button
              onClick={handleEditClick}
              className="bg-red-800 hover:bg-purple-950 text-white px-4 py-2 rounded-lg mb-4 focus:outline-none"
            >
              {/* Edit button */}
              {editMode ? "Cancel Edit" : "Edit"}
            </button>
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-8 p-10 bg-sky-300 rounded-lg">
          <div>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-red-800 font-medium mb-2"
                >
                  <strong>Company Name</strong>:
                </label>
                {
                  editMode ? <input
                    type="text"
                    id="name"
                    {...register("name", { required: 0 })}
                    defaultValue={customer?.name}
                    disabled={!editMode} // Disable based on edit mode
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                  /> : <p>{customer?.name}</p>
                }
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-red-800 font-medium mb-1"
                >
                  <strong>Email</strong>:
                </label>
                {
                  editMode ? <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: 0,
                      pattern: /^\S+@\S+$/i,
                    })}
                    defaultValue={customer?.email}
                    disabled
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                  /> : <p>{customer?.email}</p>
                }
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
                  className="block text-red-800 font-medium mb-1"
                >
                  <strong>Contact Number</strong>:
                </label>
                {
                  editMode ? <input
                    type="tel"
                    id="contact"
                    {...register("contact", { required: 0 })}
                    defaultValue={customer?.contact}
                    disabled={!editMode}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                  /> : <p>{customer?.contact}</p>
                }
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
                  className="block text-red-800 font-medium mb-2"
                >
                  <strong>Category</strong>:
                </label>
                {
                  editMode ? <select
                    id="category"
                    {...register("category")}
                    defaultValue={customer?.category}
                    disabled={!editMode}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                  >
                    {popularCategories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select> : <p>{customer?.category}</p>
                }
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="block text-red-800 font-medium mb-1"
                >
                  <strong>Website</strong>:
                </label>
                {
                  editMode ? <input
                    type="text"
                    id="website"
                    {...register("website")}
                    defaultValue={customer?.website}
                    disabled={!editMode}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                  /> : <p>{customer?.website}</p>
                }
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-red-800 font-medium mb-1"
                >
                  <strong>Address</strong>:
                </label>
                {
                  editMode ? <textarea
                    id="address"
                    {...register("address", { required: 0 })}
                    defaultValue={customer?.address}
                    disabled={!editMode}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                  /> : <p>{customer?.address}</p>
                }
                {errors.address && (
                  <span className="text-red-500">Address is required</span>
                )}
              </div>
            </div>
          </div>
          {editMode && (
            <div className="col-span-2 flex justify-center ">
              <button
                type="submit"
                className="bg-red-800 hover:bg-purple-950  text-white px-4 py-3 mt-2 rounded-lg focus:outline-none w-1/3"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Profile;
