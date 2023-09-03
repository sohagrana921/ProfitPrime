import { NavLink, Outlet } from "react-router-dom";
import {
  FaBattleNet,
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

const Dashboard = () => {
  const [checkAdmin] = useVerifyAdmin();

  return (
    <div>
      <div className="drawer lg:drawer-open">

        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col items-center justify-center">

          <div className="navbar bg-green-900 text-white font-bold fixed z-10 top-0 max-w-screen-xl mx-auto lg:hidden">
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
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-900 text-white hover:text-white rounded-box w-52 "
                >
                  {checkAdmin ? (
                    <>
                      <li>
                        <NavLink
                          to={"/dashboard/manageusers"}
                          className="hover:text-white hover:bg-green-700"
                        >
                          <FaUsers></FaUsers> Users Management
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/primeusers"}
                          className="hover:text-white hover:bg-green-700"
                        >
                          <FaUserAstronaut></FaUserAstronaut> Prime Users
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/basicusers"}
                          className="hover:text-white hover:bg-green-700"
                        >
                          <FaUserCircle></FaUserCircle> Basic Users
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <NavLink
                          to={"/dashboard/dataRevenue"}
                          className="hover:text-white hover:bg-green-700"
                        >
                          <FcDatabase /> Data Insight
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/businessRevenue"}
                          className="hover:text-white hover:bg-green-700"
                        >
                          <AiFillCaretRight /> Business Info
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/cosultingRevenue"}
                          className="hover:text-white hover:bg-green-700"
                        >
                          <FaBattleNet /> Competitor
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/dashhome"}
                          className="hover:text-white hover:bg-green-700"
                        >
                          <FaMoneyCheck></FaMoneyCheck> Subscription
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/pay"}
                          className="hover:text-white hover:bg-green-700"
                        >
                          <FaPaypal></FaPaypal> Payment History
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/help"}
                          className="hover:text-white hover:bg-green-700"
                        >
                          <FaHandsHelping /> Help
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              <div className="flex justify-between items-center">

                <a className="btn btn-ghost normal-case text-xl">Profit Prime</a>
                <NavLink to={"/"} className="hover:text-white hover:bg-green-700 ml-24">
                  Home
                </NavLink>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-gradient-to-r from-green-600 to-green-900 text-white text-xl">
            {checkAdmin ? (
              <>
                <li>
                  <NavLink
                    to={"/dashboard/manageusers"}
                    className="hover:text-white hover:bg-green-700"
                  >
                    <FaUsers></FaUsers> Users Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/primeusers"}
                    className="hover:text-white hover:bg-green-700"
                  >
                    <FaUserAstronaut></FaUserAstronaut> Prime Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/basicusers"}
                    className="hover:text-white hover:bg-green-700"
                  >
                    <FaUserCircle></FaUserCircle> Basic Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to={"/dashboard/dataRevenue"}
                    className="hover:text-white hover:bg-green-700"
                  >
                    <FcDatabase /> Data Insight
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/businessRevenue"}
                    className="hover:text-white hover:bg-green-700"
                  >
                    <AiFillCaretRight /> Business Info
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/cosultingRevenue"}
                    className="hover:text-white hover:bg-green-700"
                  >
                    <FaBattleNet /> Competitor
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/dashhome"}
                    className="hover:text-white hover:bg-green-700"
                  >
                    <FaMoneyCheck></FaMoneyCheck> Subscription
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/pay"}
                    className="hover:text-white hover:bg-green-700"
                  >
                    <FaPaypal></FaPaypal> Payment History
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>

            <li>
              <NavLink to={"/"} className="hover:text-white hover:bg-green-700">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/help"}
                className="hover:text-white hover:bg-green-700"
              >
                <FaHandsHelping /> Help
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
