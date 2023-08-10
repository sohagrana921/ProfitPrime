
import Banner from "./Banner/Banner";

import { Link } from "react-router-dom";
import Reviews from "../../Components/Review";
import Contact from "../../Components/Contact";
import Team from "../../Components/Team";
import Customer from "./Customers/Customer";
import AboutUs from "./AboutUs/AboutUs";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Customer></Customer>
      <Reviews></Reviews> 
      <Contact></Contact>
      <Team></Team>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
