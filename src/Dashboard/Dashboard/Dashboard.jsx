import { NavLink, Outlet } from "react-router-dom";
import {FaHome, FaPaypal } from "react-icons/fa";

const Dashboard = () => {

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary bg-gradient-to-r from-slate-800 to-orange-800 text-white drawer-button mt-10 md:my-10 lg:hidden">Open</label>
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-gradient-to-r from-slate-900 to-orange-800 text-white text-xl">
                        <li><NavLink to={'/'}><FaPaypal></FaPaypal> Payment History</NavLink></li>

                        <div className="divider"></div>

                        <li><NavLink to={'/'}><FaHome></FaHome> Home</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;