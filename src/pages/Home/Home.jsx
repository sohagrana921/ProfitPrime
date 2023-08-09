import { Link } from "react-router-dom";

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
    </div>
  );
};

export default Home;
