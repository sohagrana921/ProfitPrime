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
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary bg-gradient-to-r from-green-600 to-green-900 text-white drawer-button mt-10 md:my-10 lg:hidden"
          >
            Open
          </label>
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-gradient-to-r from-green-600 to-green-900 text-white text-xl">
            {checkAdmin ?
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
              :
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
                    to={"/"}
                    className="hover:text-white hover:bg-green-700"
                  >
                    <FaPaypal></FaPaypal> Payment History
                  </NavLink>
                </li>
              </>
            }

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
