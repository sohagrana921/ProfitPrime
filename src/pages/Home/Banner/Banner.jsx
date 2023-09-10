import logo1 from "../../../assets/banner/img45.jpg";
import logo2 from "../../../assets/banner/dfdfdf.jpg";
import logo3 from "../../../assets/banner/img23d.jpg";
import logo4 from "../../../assets/banner/img23.jpeg";
// import { AiOutlineArrowRight } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel max-w-screen-2xl mx-auto w-full md:h-[100vh]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={logo1} className="w-full md:h-screen h-96" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-9 pl-10 lg:pl-20 md:pl-16 w-full">
            <h1 className="lg:text-5xl font-bold font-serif">
              Unleash Growth with <br /> Our Revenue <br /> Generation Platform!
            </h1>
            <p className="hidden text-white sm:block">
              Maximize profits effortlessly with our Revenue Generation
              Platform. <br /> Harness data-driven insights, optimize
              strategies, and elevate <br /> customer engagement for exponential
              growth.
            </p>

            <div className="lg:flex">
              <a href="#about"><button className="btn btn-sm bg-red-800 hover:bg-purple-900 text-white rounded-2xl">
                About us{" "}
                <p className="text-lg">
                  <FcAbout></FcAbout>
                </p>
              </button></a>
              
              {/* <div className="flex items-center font-bold hover:text-green-400">
                <a className="text-lg font-serif lg:ml-4" href="">
                  More on morden revenue
                </a>
                <p className="ml-2 text-lg">
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle bg-purple-900 hover:bg-red-800 text-white">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-red-800 hover:bg-purple-900 text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={logo2} className="w-full md:h-screen h-96" />
        <div className="absolute h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-9 pl-10 lg:pl-20 md:pl-16 w-full">
            <h1 className="lg:text-5xl font-bold font-serif">
              Unleash Growth with <br /> Our Revenue <br /> Generation Platform!
            </h1>
            <p className="hidden  sm:block">
              Maximize profits effortlessly with our Revenue Generation
              Platform. <br /> Harness data-driven insights, optimize
              strategies, and elevate <br /> customer engagement for exponential
              growth.
            </p>

            <div className="lg:flex">
              <a href="#about"><button className="btn btn-sm bg-red-800 hover:bg-purple-900 text-white rounded-2xl">
                About us{" "}
                <p className="text-lg">
                  <FcAbout></FcAbout>
                </p>
              </button></a>
              {/* <div className="flex items-center font-bold hover:text-green-400">
                <a className="text-lg font-serif lg:ml-4" href="">
                  More on morden revenue
                </a>
                <p className="ml-2 text-lg">
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle bg-purple-900 hover:bg-red-800 text-white">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-red-800 hover:bg-purple-900 text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={logo3} className="w-full md:h-screen h-96" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-9 pl-10 lg:pl-20 md:pl-16 w-full">
            <h1 className="lg:text-5xl font-bold font-serif">
              Unleash Growth with <br /> Our Revenue <br /> Generation Platform!
            </h1>
            <p className="hidden  sm:block">
              Maximize profits effortlessly with our Revenue Generation
              Platform. <br /> Harness data-driven insights, optimize
              strategies, and elevate <br /> customer engagement for exponential
              growth.
            </p>

            <div className="lg:flex">
              <a href="#about"><button className="btn btn-sm bg-red-800 hover:bg-purple-900 text-white rounded-2xl">
                About us{" "}
                <p className="text-lg">
                  <FcAbout></FcAbout>
                </p>
              </button></a>
              
              {/* <div className="flex items-center font-bold hover:text-green-400">
                <a className="text-lg font-serif lg:ml-4" href="">
                  More on morden revenue
                </a>
                <p className="ml-2 text-lg">
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle bg-purple-900 hover:bg-red-800 text-white">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-red-800 hover:bg-purple-900 text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={logo4} className="w-full md:h-screen h-96" />
        <div className="absolute h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-9 pl-10 lg:pl-20 md:pl-16 w-full">
            <h1 className="lg:text-5xl font-bold font-serif">
              Unleash Growth with <br /> Our Revenue <br /> Generation Platform!
            </h1>
            <p className="hidden  sm:block">
              Maximize profits effortlessly with our Revenue Generation
              Platform. <br /> Harness data-driven insights, optimize
              strategies, and elevate <br /> customer engagement for exponential
              growth.
            </p>

            <div className="lg:flex">
              <a href="#about"><button className="btn btn-sm bg-red-800 hover:bg-purple-900 text-white rounded-2xl">
                About us{" "}
                <p className="text-lg">
                  <FcAbout></FcAbout>
                </p>
              </button></a>
              
              {/* <div className="flex items-center font-bold hover:text-green-400">
                <a className="text-lg font-serif lg:ml-4" href="">
                  More on morden revenue
                </a>
                <p className="ml-2 text-lg">
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="absolute  flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle bg-purple-900 hover:bg-red-800 text-white">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-red-800 hover:bg-purple-900  text-white">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
