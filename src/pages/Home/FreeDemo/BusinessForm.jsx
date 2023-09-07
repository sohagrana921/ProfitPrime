import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";

const BusinessForm = () => {
  const { register, handleSubmit } = useForm();
  const Navigate = useNavigate();

  const onSubmit = (data) => {
    const updatedUserData = [
      {
        sales: data.sales,
        price: data.price,
        target: data.target,
        names: data.names,
      },
      {
        sales: data.sales1,
        price: data.price1,
        target: data.target1,
        names: data.names1,
      },
      {
        sales: data.sales2,
        price: data.price2,
        target: data.target2,
        names: data.names2,
      },
      {
        sales: data.sales3,
        price: data.price3,
        target: data.target3,
        names: data.names3,
      },
    ];
    console.log(updatedUserData);

    Navigate("/freeDemo1", { state: { updatedUserData } });
  };

  return (
    <div className="flex flex-col md:flex-row py-16 pt-8 mt-8 justify-center items-center text-start  bg-gradient-to-r from-green-200 via-purple-300 to-green-300">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full px-8">
        <div>
          <h2 className="text-2xl py-5 font-semibold mb-4 text-center text-gray-800 md:mb-0">
            <Marquee>Business Form Data For Free Trial</Marquee>
          </h2>
        </div>
        <div className="md:grid grid-cols-4 gap-8 p-10 bg-gray-200 rounded-lg shadow-lg">
          <div>
            <div className="md:mt">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="names"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    First Product Name
                  </label>
                  <input
                    type="text"
                    id="names"
                    {...register("names")}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="sales"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Sales
                  </label>
                  <input
                    type="text"
                    id="sales"
                    {...register("sales")}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="price"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    id="price"
                    {...register("price")}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="names1"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Second Product Name
                </label>
                <input
                  type="text"
                  id="names1"
                  {...register("names1")}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="sales1"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Sales
                </label>
                <input
                  type="text"
                  id="sales1"
                  {...register("sales1")}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="price1"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Price
                </label>
                <input
                  type="text"
                  id="price1"
                  {...register("price1")}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <div className="md:mt">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="names2"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Third Product Name
                    </label>
                    <input
                      type="text"
                      id="names2"
                      {...register("names2")}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sales2"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Sales
                    </label>
                    <input
                      type="text"
                      id="sales2"
                      {...register("sales2")}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="price2"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      id="price2"
                      {...register("price2")}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="names3"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Fourth Product Name
                </label>
                <input
                  type="text"
                  id="names3"
                  {...register("names3")}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="sales3"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Sales
                </label>
                <input
                  type="text"
                  id="sales3"
                  {...register("sales3")}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="price3"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Price
                </label>
                <input
                  type="text"
                  id="price3"
                  {...register("price3")}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 flex">
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

export default BusinessForm;
