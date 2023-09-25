import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBattleNet,
  FaEdit,
  FaHandsHelping,
  FaHome,
  FaMoneyCheck,
  FaPaypal,
  FaUserAstronaut,
  FaUserCircle,
  FaUsers,
} from "react-icons/fa";
import { FcDatabase } from "react-icons/fc";
import { AiFillCaretRight } from "react-icons/ai";
import useVerifyAdmin from "../../Hooks/useVerifyAdmin";
import useUsersInfo from "../../Hooks/useUsersInfo";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [checkAdmin] = useVerifyAdmin();
  const [users] = useUsersInfo();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedUserRole = localStorage.getItem("userRole"); 
    if (storedUserRole) {
      setUserRole(storedUserRole);
    } else {
      if (users?.userRole === "yearlyBasic" ||users?.userRole === "monthlyBasic"||users?.userRole === "monthlyPrime" || users?.userRole === "yearlyPrime" || users?.role === "admin") {
        setUserRole(users.userRole);

        localStorage.setItem("userRole", users.userRole); 
      } else {
        navigate("/pricing");
      }
    }
  }, [users, navigate]);

  let planName='';

  if (userRole === "yearlyBasic" || userRole === "monthlyBasic" ) {
    // setPlan('Basic')
    planName='Basic'
  }
  else {
    // setPlan('Prime')
    planName='Prime'
  }
  console.log(planName);

  if (!userRole) {
    // User role hasn't been fetched yet, show a loading indicator or redirect to a loading page
    return (
      <div className="flex justify-center my-28">
        <progress className="progress w-1/2"></progress>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>ProfitPrime | DashBoard</title>
      </Helmet>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col items-center justify-center">
          <div className="navbar bg-gradient-to-r from-purple-950 to-red-800 text-white font-bold fixed z-10 top-0 max-w-screen-xl mx-auto lg:hidden">
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
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-r from-purple-950 to-red-800 text-white hover:text-white rounded-box w-52 "
                >
                  <h1 className="text-center text-sm">{users.name}</h1>
                  <h1 className="text-center my-2 text-sm">{users.website}</h1>
                  <Link to={"/dashboard/profile"}>
                    <p className="text-center flex justify-center uppercase text-yellow-200 mb-2">
                      {planName}
                    </p>
                  </Link>
                  <h1 className="text-center text-xl tracking-widest uppercase text-yellow-200 font-bold mb-2">
                    {users.role === "admin" ? <>Admin</> : <></>}
                  </h1>

                  {checkAdmin ? (
                    <>
                      <li>
                        <NavLink
                          to={"/dashboard/manageusers"}
                          className="hover:text-white hover:bg-red-950"
                        >
                          <FaUsers></FaUsers> Users Management
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/primeusers"}
                          className="hover:text-white hover:bg-red-950"
                        >
                          <FaUserAstronaut></FaUserAstronaut> Prime Users
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/basicusers"}
                          className="hover:text-white hover:bg-red-950"
                        >
                          <FaUserCircle></FaUserCircle> Basic Users
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <NavLink
                          to={"/dashboard/dataInsight"}
                          className="hover:text-white hover:bg-red-950"
                        >
                          <FcDatabase /> Data Insight
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/businessRevenue"}
                          className="hover:text-white hover:bg-red-950"
                        >
                          <AiFillCaretRight /> Business Info
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/cosultingRevenue"}
                          className="hover:text-white hover:bg-red-950"
                        >
                          <FaBattleNet /> Competitor
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/dashhome"}
                          className="hover:text-white hover:bg-red-950"
                        >
                          <FaMoneyCheck></FaMoneyCheck> Subscription
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/pay"}
                          className="hover:text-white hover:bg-red-950"
                        >
                          <FaPaypal></FaPaypal> Payment History
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/review"}
                          className="hover:text-white hover:bg-red-950"
                        >
                          <FaPaypal></FaPaypal> Add a review
                        </NavLink>
                      </li>
                      {checkAdmin ? (
                        <>
                          <li>
                            <NavLink
                              to={"/dashboard/help"}
                              className="hover:text-white hover:bg-red-950 hidden"
                            >
                              <FaHandsHelping /> Help
                            </NavLink>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <NavLink
                              to={"/dashboard/help"}
                              className="hover:text-white hover:bg-red-950"
                            >
                              <FaHandsHelping /> Help
                            </NavLink>
                          </li>
                        </>
                      )}
                      <li>
                        <NavLink
                          to={"/"}
                          className="hover:text-white hover:bg-red-950 flex"
                        >
                          <FaHome></FaHome> Home
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <a className="btn btn-ghost normal-case text-xl">
                  Profit Prime
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-gradient-to-r from-purple-950 to-red-800 text-white text-xl">
            <h1 className="text-center text-md font-bold">{users.name}</h1>
            <h1 className="text-center my-2 text-md text-">{users.website}</h1>
            <Link to={"/dashboard/profile"}>
              <a className="flex justify-center  text-2xl tracking-widest uppercase  font-extrabold text-yellow-200 mb-2 hover:underline">
                {planName}
              </a>
            </Link>
            <h1 className="text-center text-2xl tracking-widest uppercase text-yellow-200 font-extrabold">
              {users.role === "admin" ? <>Admin</> : <></>}
            </h1>

            <div className="divider"></div>

            {checkAdmin ? (
              <>
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
                  <li>
                    <NavLink
                      to={"/dashboard/manageusers"}
                      className="hover:text-white hover:bg-red-950"
                    >
                      <FaUsers></FaUsers> Users Management
                    </NavLink>
                  </li>
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
                  <li>
                    <NavLink
                      to={"/dashboard/primeusers"}
                      className="hover:text-white hover:bg-red-950"
                    >
                      <FaUserAstronaut></FaUserAstronaut> Prime Users
                    </NavLink>
                  </li>
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
                  <li>
                    <NavLink
                      to={"/dashboard/basicusers"}
                      className="hover:text-white hover:bg-red-950"
                    >
                      <FaUserCircle></FaUserCircle> Basic Users
                    </NavLink>
                  </li>
                </motion.div>
              </>
            ) : (
              <>
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
                  <li>
                    <NavLink
                      to={"/dashboard/dataInsight"}
                      className="hover:text-white hover:bg-red-950"
                    >
                      <FcDatabase /> Data Insight
                    </NavLink>
                  </li>
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
                  <li>
                    <NavLink
                      to={"/dashboard/businessRevenue"}
                      className="hover:text-white hover:bg-red-950"
                    >
                      <AiFillCaretRight /> Business Info
                    </NavLink>
                  </li>
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
                  <li>
                    <NavLink
                      to={"/dashboard/cosultingRevenue"}
                      className="hover:text-white hover:bg-red-950"
                    >
                      <FaBattleNet /> Competitor
                    </NavLink>
                  </li>
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
                  <li>
                    <NavLink
                      to={"/dashboard/dashhome"}
                      className="hover:text-white hover:bg-red-950"
                    >
                      <FaMoneyCheck></FaMoneyCheck> Subscription
                    </NavLink>
                  </li>
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
                  <li>
                    <NavLink
                      to={"/dashboard/pay"}
                      className="hover:text-white hover:bg-red-950"
                    >
                      <FaPaypal></FaPaypal> Payment History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/review"}
                      className="hover:text-white hover:bg-red-950"
                    >
                      <FaEdit></FaEdit> Add a review
                    </NavLink>
                  </li>
                </motion.div>
              </>
            )}

            <div className="divider"></div>

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
              <li>
                <NavLink to={"/"} className="hover:text-white hover:bg-red-950">
                  <FaHome /> Home
                </NavLink>
              </li>
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
              {checkAdmin ? (
                <>
                  <li>
                    <NavLink
                      to={"/dashboard/help"}
                      className="hover:text-white hover:bg-red-950 hidden"
                    >
                      <FaHandsHelping /> Help
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to={"/dashboard/help"}
                      className="hover:text-white hover:bg-red-950"
                    >
                      <FaHandsHelping /> Help
                    </NavLink>
                  </li>
                </>
              )}
            </motion.div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
