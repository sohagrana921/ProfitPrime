import {
  FaArrowsAlt,
  FaBabyCarriage,
  FaBrain,
  FaPencilAlt,
  FaPhone,
} from "react-icons/fa";

const OurProcess = () => {
  return (
    <div className="bg-gradient-to-r from-purple-950 to-red-800 py-20 mt-20 text-white text-center">
      <div className="text-center text-md lg:text-2xl md:px-64">
        <h3 className="md:text-2xl mb-20 font-bold border-purple-900 border-y-4 py-2 uppercase text-white">
          OUR PROCESS
        </h3>
      </div>
      <div className="mt-10 mb-10 text-center">
        <div className="md:flex justify-center items-center my-5">
          <div className="lg:mr-40 md:mr-20">
            <FaPhone className="h-20  w-20 mt-10 bg-red-800 text-white p-4 rounded-lg mx-auto"></FaPhone>
            <h1
              className="text-xl lg:text-2xl uppercase font-bold mt-4 tracking-widest"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              First Contact
            </h1>
          </div>
          <div>
            <FaBrain className="h-20 w-20 mt-10 bg-red-800 text-white p-4 rounded-lg mx-auto"></FaBrain>

            <h1
              className="text-xl lg:text-2xl uppercase font-bold mt-4 tracking-widest"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              Discussion & Planning
            </h1>
          </div>
        </div>
        <div className="md:flex justify-center mt-10 md:mt-24 mx-8">
          <div>
            <FaBabyCarriage className="h-20 w-20 mt-10 bg-red-800 text-white p-4 rounded-lg mx-auto"></FaBabyCarriage>

            <h1
              className="text-xl lg:text-2xl uppercase font-bold mt-4 tracking-widest"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              Final Strategy
            </h1>
          </div>
          <div className="lg:mx-44 mx-20">
            <FaPencilAlt className="h-20 w-20 mt-10 bg-red-800 text-white p-4 rounded-lg mx-auto"></FaPencilAlt>

            <h1
              className="text-xl lg:text-2xl uppercase font-bold mt-4 tracking-widest"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              Implementation
            </h1>
          </div>
          <div>
            <FaArrowsAlt className="h-20 w-20 bg-red-800 mt-10 text-white p-4 rounded-lg mx-auto"></FaArrowsAlt>

            <h1
              className="text-xl lg:text-2xl uppercase font-bold mt-4 tracking-widest"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              Control
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
