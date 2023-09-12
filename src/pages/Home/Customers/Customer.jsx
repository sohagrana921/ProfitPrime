import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

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
      <SectionTitle
        subheading={"CUSTOMERS"}
        heading={" 10+ Company Grow Their Businesses With Us!!"}
      ></SectionTitle>
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
