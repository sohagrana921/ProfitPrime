import Banner from "./Banner/Banner";
import Reviews from "../../Components/Review";
import Contact from "../../Components/Contact";
import Team from "../../Components/Team";
import Customer from "./Customers/Customer";
import AboutUs from "./AboutUs/AboutUs";
import WebData from "./WebData/WebData";
import FAQuestion from "./FAQuestion/FAQuestion";
import Process from "./Process/Process"
import { Helmet } from "react-helmet-async";
import OurProcess from "./Process/OurProcess";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ProfitPrime | Home</title>
      </Helmet>
      <Banner></Banner>
      <Customer></Customer>
      <AboutUs></AboutUs>
      <WebData></WebData>
      <Reviews></Reviews>
      <Process></Process>
      <Team></Team>
      <FAQuestion></FAQuestion>
      <OurProcess></OurProcess>
      <Contact></Contact>
    </div>
  );
};

export default Home;
