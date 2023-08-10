import { Link } from "react-router-dom";
import Reviews from "../../Components/Review";
import Contact from "../../Components/Contact";
import Team from "../../Components/Team";
import Customer from "./Customers/Customer";
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      {/* For test */}
      <button className="btn btn-active">Default</button>
      <button className="btn btn-active btn-neutral">Neutral</button>
      <button className="btn btn-active btn-primary">Primary</button>
      <button className="btn btn-active btn-secondary">Secondary</button>
      <button className="btn btn-active btn-accent">Accent</button>
      <button className="btn btn-active btn-ghost">Ghost</button>
      <button className="btn btn-active btn-link">Link</button>
      <Link to={'/login'}><button className="btn btn-active btn-primary">Login</button></Link>
      <Link to={'/register'}><button className="btn btn-active btn-secondary">Register</button></Link> 

      <Customer></Customer>
      <Reviews></Reviews> 
      <Contact></Contact>
      <Team></Team>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
