
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import img1 from "../../../assets/details/easy-hotel.png";
import img2 from "../../../assets/details/freehand.png";
import img3 from "../../../assets/details/lark.png";
import img4 from "../../../assets/details/machefert.png";
import img5 from "../../../assets/details/mama-shelter.png";
import img6 from "../../../assets/details/sacher.png";
import img7 from "../../../assets/details/the-hoxton.png";
import img8 from "../../../assets/details/tsh.png";

const data = [
  {
    name: "Page A",
    Price: 590,
    Sells: 800,
    Target: 1400,
    Offer: 490,
  },
  {
    name: "Page B",
    Price: 868,
    Sells: 967,
    Target: 1506,
    Offer: 590,
  },
  {
    name: "Page C",
    Price: 1397,
    Sells: 1098,
    Target: 989,
    Offer: 850,
  },
  {
    name: "Page D",
    Price: 1480,
    Sells: 1200,
    Target: 628,
    Offer: 780,
  },
  {
    name: "Page E",
    Price: 1520,
    Sells: 1108,
    Target: 1100,
    Offer: 960,
  },
  {
    name: "Page F",
    Price: 1400,
    Sells: 680,
    Target: 1700,
    Offer: 880,
  },
];

const HybridCustomer = () => {
  const [product, setProduct] = useState([]);
  const [showFullText, setShowFullText] = useState({});
  const [showMoreDetails, setShowMoreDetails] = useState({});

  useEffect(() => {
    fetch("Customer3.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  });

  const toggleFullText = (productId) => {
    setShowFullText((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const toggleMoreDetails = (productId) => {
    setShowMoreDetails((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <div className="my-container">
      {product.map((p) => (
        <div key={p.id}>
          <div className="hero mt-52 mb-36">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={p.brand_img} className="w-96 rounded-lg shadow-2xl" />
              <div>
                <p className="mb-5 text-xl text-purple-950">{p.service}</p>
                <h1 className="text-5xl font-bold text-red-800">
                  {p.branding}
                </h1>
                <p className="py-6 text-2xl">
                  {showFullText[p.id]
                    ? p.descrb
                    : `${p.descrb.slice(0, 100)}...`}
                </p>
                <button
                  onClick={() => toggleFullText(p.id)}
                  className="btn bg-red-800 hover:bg-purple-950 text-white animate-pulse"
                >
                  <motion.div
                    className="box"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }} >

                    {showFullText[p.id] ? "Read Less" : "Learn More"}
                  </motion.div>
                </button>
              </div>
            </div>
          </div>

          <div className="mb-36">
            <ResponsiveContainer width="90%" height={300}>
              <ComposedChart
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="Target"
                  fill="#8884d8"
                  stroke="#8884d8"
                />
                <Bar dataKey="Sells" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="Price" stroke="#ff7300" />
                <Scatter dataKey="Offer" fill="red" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
              <img src={p.c_img} className="w-44 rounded-lg shadow-2xl mr-28" />
              <div>
                <p className="py-6 text-2xl">{p.customer_des}</p>
                <h1 className="text-xl font-bold text-red-800">{p.c_name}</h1>
                {/* <a className="hover:underline" href="">
                  {p.c_work}
                </a> */}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 w-7/12 mt-40 gap-16 mx-auto">
            <div>
              <img src={img1} alt="" data-aos="zoom-in-up" />
            </div>
            <div>
              <img src={img2} alt="" data-aos="zoom-in-up" />
            </div>
            <div>
              <img src={img3} alt="" data-aos="zoom-in-up" />
            </div>
            <div>
              <img src={img4} alt="" data-aos="zoom-in-up" />
            </div>
            <div>
              <img src={img5} alt="" data-aos="zoom-in-up" />
            </div>
            <div>
              <img src={img6} alt="" data-aos="zoom-in-up" />
            </div>
            <div>
              <img src={img7} alt="" data-aos="zoom-in-up" />
            </div>
            <div>
              <img src={img8} alt="" data-aos="zoom-in-up" />
            </div>
          </div>

          <div>
            <div className="text-center my-16 md:my-20 md:mx-64">
              <h3 className="md:text-2xl font-bold border-purple-900 border-y-4 py-2 uppercase text-red-800">
                Case Studies
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 mx-auto">
              <div className="card card-compact w-full h-full bg-base-100">
                <figure className="rounded-none">
                  <img src={p.hotel_img1} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl text-red-800">
                    {p.hotel_name}
                  </h2>
                  <p className="text-lg">{p.hotel_des}</p>
                </div>
              </div>
              <div className="card card-compact w-full h-full bg-base-100">
                <figure className="rounded-none">
                  <img className="ml-5" src={p.hotel_img2} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl text-red-800">
                    {p.hotel_name2}
                  </h2>
                  <p className="text-lg">{p.hotel_des2}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto mt-28">
            <div>
              <h1 className="text-5xl font-serif font-bold text-red-800">
                {p.question}
              </h1>
            </div>
            <div>
              <p className="py-6 text-2xl">
                {showMoreDetails[p.id]
                  ? p.q_details
                  : `${p.q_details.slice(0, 100)}...`}
              </p>
              {/* <p className="text-xl">{p.q_details}</p> */}
              <div className="mt-10 mb-16">
                <button
                  onClick={() => toggleMoreDetails(p.id)}
                  className="btn bg-red-800 hover:bg-purple-950 text-white animate-pulse"
                >
                  <motion.div
                    className="box"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }} >

                    {showMoreDetails[p.id]
                      ? "Show Less Details"
                      : "Learn More Details"}
                  </motion.div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HybridCustomer;