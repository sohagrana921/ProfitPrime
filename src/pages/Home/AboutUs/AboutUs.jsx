import { useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div id="about">
      <SectionTitle
        subheading={"About Us"}
        heading={"What We do!!"}
      ></SectionTitle>
      <div className="flex justify-center items-center my-container">
        <div className="container mx-auto md:flex items-center">
          <div className="md:w-full lg:px-5 lg:ml-10" data-aos="fade-right ">
            <p className="text-gray-700 mb-6 text-justify">
              {showFullText
                ? "Our Company Profit Prime is your gateway to enhanced growth and prosperity. Through our innovative products, transparent pricing, and powerful features, we empower your business to easily optimize revenue strategies. Embrace technology's potential to streamline operations, boost customer engagement, and amplify profits. This marks a new chapter in revenue generation, propelling your business towards efficiency, competitiveness, and lasting triumph. Welcome to the future of revenue excellence. Maximize profits effortlessly with our Revenue Generation Platform. Harness data-driven insights, optimize strategies, and elevate customer engagement for exponential growth."
                : "Our Company Profit Prime is your gateway to enhanced growth and prosperity. Through our innovative products, transparent pricing, and powerful features, we empower your business to easily optimize revenue strategies. Embrace technology's potential to streamline operations, boost customer engagement, and amplify profits."}
            </p>

            <div className="flex space-x-4 items-center justify-center">
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
                {!showFullText && (
                  <button
                    onClick={toggleFullText}
                    className="lg:px-4 px-2 py-2 bg-red-800 hover:bg-purple-900  text-white rounded transition duration-300"
                  >
                    Learn More
                  </button>
                )}
              </motion.div>

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
                <a
                  href="#testimonials"
                  className="lg:px-4 px-2 py-3 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-300"
                >
                  READ TESTIMONIALS
                </a>
              </motion.div>
            </div>
          </div>
          {/* <div className="md:w-1/2 py-12 " data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/7948041/pexels-photo-7948041.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="About Us Image"
              className="w-full h-auto md:max-w-lg mx-auto rounded-lg  px-10"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
