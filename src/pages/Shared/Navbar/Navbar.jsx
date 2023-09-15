import { Link } from "react-router-dom";
import logo from "../../../assets/profit-up.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useVerifyAdmin from "../../../Hooks/useVerifyAdmin";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showLinks, setShowLinks] = useState(false);
  const [showLinks1, setShowLinks1] = useState(false);
  const [checkAdmin] = useVerifyAdmin();

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const toggleLinks1 = () => {
    setShowLinks1(!showLinks1);
  };
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar bg-gradient-to-r from-purple-950 to-red-800 text-white font-bold fixed z-10 top-0 max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-r from-purple-950 to-red-950 text-white hover:text-white rounded-box w-52"
          >
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              <Link to={"/"}>
                <li>
                  <a className="hover:text-white hover:bg-red-950">Home</a>
                </li>
              </Link>
            </motion.div>
            <li onMouseEnter={toggleLinks1} onMouseLeave={toggleLinks1}>
              <summary className="hover:text-white hover:bg-red-950">
                Products
              </summary>
              {showLinks1 && (
                <ul className="p-2 bg-gradient-to-r from-purple-950 to-red-950 text-white rounded-xl absolute top-0 left-32">
                  <Link to={"/dataAnalysis"}>
                    <li className="hover:bg-red-900 p-2 rounded-lg">
                      Data Analysis & Insights
                    </li>
                  </Link>
                  <Link to={"/consulting"}>
                    <li className="hover:bg-red-900 p-2 rounded-lg">
                      Consulting Services
                    </li>
                  </Link>
                  <Link to={"/businessoption"}>
                    <li className="hover:bg-red-900 p-2 rounded-lg">
                      Business optimization
                    </li>
                  </Link>
                  <Link to={"/competitor"}>
                    <li className="hover:bg-red-900 p-2 rounded-lg">
                      Competitor Solution
                    </li>
                  </Link>
                </ul>
              )}
            </li>
            {checkAdmin ? (
              <>
                <Link to="/pricing">
                  <li>
                    <a className="hover:text-white hover:bg-red-950 hidden">
                      Pricing
                    </a>
                  </li>
                </Link>
              </>
            ) : (
              <>
                <Link to="/pricing">
                  <li>
                    <a className="hover:text-white hover:bg-red-950">Pricing</a>
                  </li>
                </Link>
              </>
            )}

            <li onMouseEnter={toggleLinks} onMouseLeave={toggleLinks}>
              <summary className="hover:text-white hover:bg-red-950">
                Customers
              </summary>
              {showLinks && (
                <ul className="p-2 bg-gradient-to-r from-purple-950 to-red-950 text-white absolute rounded-xl top-0 left-32">
                  <Link to="/limitedHotelService">
                    <li className="hover:bg-red-900 p-2 rounded-lg">
                      Limited Service Hotel
                    </li>
                  </Link>
                  <Link to="/hybridcustomer">
                    <li className="my-2 hover:bg-red-900 p-2 rounded-lg">
                      Hybrid Accommodation
                    </li>
                  </Link>
                  <Link to="/upscale">
                    <li className="my-2 hover:bg-red-900 p-2 rounded-lg">
                      Upscale & Luxury Hotel
                    </li>
                  </Link>
                </ul>
              )}
            </li>
            <Link to={"/contact"}>
              <li>
                <a className="hover:text-white hover:bg-red-950">Contact</a>
              </li>
            </Link>
            {user ? (
              <>
                <Link to="/dashboard">
                  <li>
                    <a className="hover:text-white hover:bg-red-950">
                      Dashboard
                    </a>
                  </li>
                </Link>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <img src={logo} alt="" className="lg:h-10 h-5 w-5 lg:w-10" />
        <Link to="/" className="btn btn-ghost normal-case lg:text-xl">
          Profit Prime
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            <Link to={"/"}>
              <li>
                <a className="hover:text-white hover:bg-red-950">Home</a>
              </li>
            </Link>
          </motion.div>
          <li onMouseEnter={toggleLinks1} onMouseLeave={toggleLinks1}>
            <summary className="hover:text-white hover:bg-red-950">
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              >
                Products
              </motion.div>
            </summary>
            {showLinks1 && (
              <ul className="p-2 bg-gradient-to-r from-purple-950 to-red-950 text-white rounded-xl absolute top-full right-0">
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  <Link to={"/dataAnalysis"}>
                    <li className="hover:bg-red-900 p-2 rounded-lg">
                      Data Analysis & Insights
                    </li>
                  </Link>
                </motion.div>

                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  <Link to={"/consulting"}>
                    <li className="hover:bg-red-900 p-2 rounded-lg">
                      Consulting Services
                    </li>
                  </Link>
                </motion.div>

                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  <Link to={"/businessoption"}>
                    <li className="hover:bg-red-900 p-2 rounded-lg">
                      Business optimization
                    </li>
                  </Link>
                </motion.div>

                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  <Link to={"/competitor"}>
                    <li className="hover:bg-red-900 p-2 rounded-lg">
                      Competitor Solution
                    </li>
                  </Link>
                </motion.div>
              </ul>
            )}
          </li>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            {checkAdmin ? (
              <>
                <Link to="/pricing">
                  <li>
                    <a className="hover:text-white hover:bg-red-950 hidden">
                      Pricing
                    </a>
                  </li>
                </Link>
              </>
            ) : (
              <>
                <Link to="/pricing">
                  <li>
                    <a className="hover:text-white hover:bg-red-950">Pricing</a>
                  </li>
                </Link>
              </>
            )}
          </motion.div>

          <li onMouseEnter={toggleLinks} onMouseLeave={toggleLinks}>
            <summary className="hover:text-white hover:bg-red-950">
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              >
                Customers
              </motion.div>
            </summary>
            {showLinks && (
              <ul className="p-2 bg-gradient-to-r from-purple-950 to-red-950 text-white absolute rounded-xl top-full right-0">
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  <Link to="/limitedHotelService">
                    <li className="hover:bg-red-900 p-2 rounded-lg">
                      Limited Service Hotel
                    </li>
                  </Link>
                </motion.div>

                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  <Link to="/hybridcustomer">
                    <li className="my-2 hover:bg-red-900 p-2 rounded-lg">
                      Hybrid Accommodation
                    </li>
                  </Link>
                </motion.div>

                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  <Link to="/upscale">
                    <li className="my-2 hover:bg-red-900 p-2 rounded-lg">
                      Upscale & Luxury Hotel
                    </li>
                  </Link>
                </motion.div>
              </ul>
            )}
          </li>

          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            <Link to={"/contact"}>
              <li>
                <a className="hover:text-white hover:bg-red-950">Contact</a>
              </li>
            </Link>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            {user ? (
              <>
                <Link to="/dashboard">
                  <li>
                    <a className="hover:text-white hover:bg-red-950">
                      Dashboard
                    </a>
                  </li>
                </Link>
              </>
            ) : (
              <></>
            )}
          </motion.div>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/free" className="btn btn-xs rounded-full mr-4 animate-pulse">
          Free Demo
        </Link>
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          {user ? (
            <Link
              onClick={handleLogOut}
              className="hover:bg-red-950 p-2 rounded-md"
            >
              Logout
            </Link>
          ) : (
            <Link className="hover:bg-red-950 p-2 rounded-md" to={"/login"}>
              Login
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
