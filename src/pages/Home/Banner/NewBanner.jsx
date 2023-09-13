import videoBg from "../../../assets/banner/new.mp4";
import LazyLoad from "react-lazy-load";
import "./NewBanner.css";

const NewBanner = () => {
  return (
    <div className="main mt-16">
      {/* <div className="absolute md:right-[450px] md:top-96 right-[0px] top-24 text-center">
        <h1 className="text-4xl font-bold font-serif text-purple-950">Unleash Growth With </h1>
        <p className="text-xl font-bold font-serif text-purple-950">Our Revenue Generation Platform!</p>
      </div> */}
      <LazyLoad height={762} offset={300}>
        <video src={videoBg} autoPlay loop muted />
      </LazyLoad>
    </div>
  );
};

export default NewBanner;
