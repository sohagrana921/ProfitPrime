import videoBg from "../../../assets/banner/new.mp4";
import "./NewBanner.css";

const NewBanner = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      {/* <div className="absolute right-[0px] top-0 text-center bg-black opacity-60 h-full pt-44 w-full">
        <h1 className="text-6xl font-bold font-serif text-red-700">Unleash Growth With </h1>
        <p className="text-4xl font-bold font-serif text-red-700">Our Revenue Generation Platform!</p>
      </div> */}
    </div>
  );
};

export default NewBanner;
