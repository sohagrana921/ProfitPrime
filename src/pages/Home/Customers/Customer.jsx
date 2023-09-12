import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";

const Customer = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    axios
      .get("https://profit-prime-server.vercel.app/companyLogos")
      .then((response) => {
        setLogos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching logos:", error);
      });
  }, []);

  return (
    <>
      <div className="text-center my-16 md:my-32  md:mx-64">
        <p className="text-red-800">---CUSTOMERS---</p>
        <h3 className="md:text-2xl font-bold border-purple-900 border-y-4 py-2 uppercase text-red-800">
          10+ Company Grow Their Businesses With Us!!
        </h3>
      </div>
      <Marquee>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.url}
            alt=""
            className="logo-style md:w-[150px] h-[80px] w-[80px] md:h-[150px] md:mr-[100px] mr-[40px] rounded-[50%]"
          />
        ))}
      </Marquee>
    </>
  );
};

export default Customer;
