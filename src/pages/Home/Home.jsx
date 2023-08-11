import Banner from "./Banner/Banner";
import Reviews from "../../Components/Review";
import Contact from "../../Components/Contact";
import Team from "../../Components/Team";
import Customer from "./Customers/Customer";
import AboutUs from "./AboutUs/AboutUs";
import WebData from "./WebData/WebData";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Team></Team>
      <Customer></Customer>
      <WebData></WebData>
      <Reviews></Reviews>
      <Contact></Contact>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
