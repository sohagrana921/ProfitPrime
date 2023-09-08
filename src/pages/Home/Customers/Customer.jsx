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
      <h1 className="lg:text-4xl text-2xl uppercase font-bold py-14 md:py-20 text-sky-950 text-center my-container">
        {" "}
        10+ Company Grow Their Businesses With Us!!
      </h1>
      <Marquee>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.url}
            alt=""
            className="logo-style md:w-[150px] h-[100px] w-[100px] md:h-[150px] mr-[70px] rounded-[50%]"
          />
        ))}
      </Marquee>
    </>
  );
};

export default Customer;
