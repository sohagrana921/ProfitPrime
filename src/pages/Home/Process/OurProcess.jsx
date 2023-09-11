import { FaArrowsAlt, FaBabyCarriage, FaBrain, FaPencilAlt, FaPhone } from "react-icons/fa";


const OurProcess = () => {
    return (
        <div className="bg-gradient-to-r from-purple-950 to-red-800 py-20 mt-20 text-white text-center">
            <div className="text-center  md:mx-64">
                <h3 className="md:text-2xl mb-20 font-bold border-purple-900 border-y-4 py-2 uppercase text-white">OUR PROCESS</h3>
            </div>
            <div className="mt-10 mb-10 text-center">
                <div className="md:flex justify-center items-center my-5">
                    <div className="md:mr-40">
                        <FaPhone className="h-20  w-20 mt-10 bg-red-800 text-white p-4 rounded-lg mx-auto"></FaPhone>
                        <p className=" mb-10 mt-3">1.</p>
                        <h1 className="text-2xl uppercase font-bold">First Contact</h1>
                    </div>
                    <div>
                        <FaBrain className="h-20 w-20 mt-10 bg-red-800 text-white p-4 rounded-lg mx-auto"></FaBrain>
                        <p className=" mb-10 mt-3">2.</p>
                        <h1 className="text-2xl uppercase font-bold">Discussion & Planning</h1>
                    </div>
                </div>
                <div className="md:flex justify-center mt-10 md:mt-24">
                    <div>
                        <FaBabyCarriage className="h-20 w-20 mt-10 bg-red-800 text-white p-4 rounded-lg mx-auto"></FaBabyCarriage>
                        <p className=" mb-10 mt-3">3.</p>
                        <h1 className="text-2xl uppercase font-bold">Final Strategy</h1>
                    </div>
                    <div className="md:mx-44">
                        <FaPencilAlt className="h-20 w-20 mt-10 bg-red-800 text-white p-4 rounded-lg mx-auto"></FaPencilAlt>
                        <p className=" mb-10 mt-3">4.</p>
                        <h1 className="text-2xl uppercase font-bold">Implementation</h1>
                    </div>
                    <div>
                        <FaArrowsAlt  className="h-20 w-20 bg-red-800 mt-10 text-white p-4 rounded-lg mx-auto"></FaArrowsAlt>
                        <p className=" mb-10 mt-3">5.</p>
                        <h1 className="text-2xl uppercase font-bold">Control</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProcess;