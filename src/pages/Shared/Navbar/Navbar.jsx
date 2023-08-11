import { Link } from "react-router-dom";
import logo from '../../../assets/profit-up.png'

const Navbar = () => {

  return (
    <div className="navbar bg-green-900 text-white font-bold fixed z-10 top-0 max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-900 text-white rounded-box w-52">
            <Link to={'/'}><li><a>Home</a></li></Link>
            <li tabIndex={0}>
              <details>
                <summary>Products</summary>
                <ul className="p-2 bg-green-900">
                  <li><Link>Billing</Link></li>
                  <li><Link>Revenue</Link></li>
                  <li><Link>Payments</Link></li>
                  <li><Link>Monetization</Link></li>
                </ul>
              </details>
            </li>
            <Link><li><a>Pricing</a></li></Link>
            <Link><li><a>Customers</a></li></Link>
            <Link><li><a>Contact</a></li></Link>
          </ul>
        </div>
        <img src={logo} alt="" className="h-10 w-10"/>
        <a className="btn btn-ghost normal-case text-xl">Profit Prime</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to={'/'}><li><a>Home</a></li></Link>
          <li tabIndex={0}>
            <details>
              <summary>Products</summary>
              <ul className="p-2 bg-green-900">
                <li><Link>Billing</Link></li>
                <li><Link>Revenue</Link></li>
                <li><Link>Payments</Link></li>
                <li><Link>Monetization</Link></li>
              </ul>
            </details>
          </li>
          <Link><li><a>Pricing</a></li></Link>
          <Link><li><a>Customers</a></li></Link>
          <Link><li><a>Contact</a></li></Link>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={'/login'}><button className="hover:bg-green-600 p-3 rounded-md">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;



// import { Link } from "react-router-dom";
// import { FaAngleDown } from "react-icons/fa";
// import Swal from "sweetalert2";
// import { useState } from "react";
// const Navbar = () => {
//   const { user, logOut, loading } = {};
//   const [toggle, setToggle] = useState(false);
//   const handleLogOut = () => {
//     logOut()
//       .then(() => {
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Successfully signed out",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const subMenuStyle = `
//   li:hover > ul {
//     display: block;
//   }
// `;
//   return (
//     <div className="bg-[#123426] text-white relative lg:grid lg:grid-cols-7 lg:justify-between lg:items-center flex items-center border-b border-gray-300 lg:border-none">
//       <style>{subMenuStyle}</style>
//       <div className="flex items-center gap-2 lg:gap-3 col-span-2">
//         <span className="text-white">
//           <img
//             className="lg:h-10 lg:w-10 w-6 h-6 ml-3 lg:ml-5"
//             src="/profit-up.png"
//             alt="logo"
//           />
//         </span>
//         <h1 className="text-2xl font-bold pb-2 lg:pb-0">ProfitPrime</h1>
//       </div>
//       <ul
//         className={`${
//           toggle
//             ? "top-9 lg:top-0 ease-in-out duration-500 lg:duration-0"
//             : "-top-52 ease-in duration-500 lg:top-0 lg:duration-0"
//         } text-lg font-medium lg:grid lg:grid-cols-5 gap-5 justify-between items-center lg:text-center lg:h-20 px-5 py-2 lg:py-0 lg:pb-0 absolute lg:relative -z-20 lg:z-20 bg-[#123426] w-full col-span-4`}
//       >
//         <li>
//           <Link>Home</Link>
//         </li>
//         <li className="relative">
//           <Link className="flex items-center">
//             Products <FaAngleDown />
//           </Link>
//           <ul className="absolute hidden hover:block bg-[#123426] w-[200px] lg:top-[25px] left-24 lg:left-0 -mt-7 lg:-mt-0 pl-5 pb-3 lg:pt-10 -ml-2 text-left z-20">
//             <li>
//               <Link>Billing</Link>
//             </li>
//             <li>
//               <Link>Revenue</Link>
//             </li>
//             <li>
//               <Link>Payments</Link>
//             </li>
//             <li>
//               <Link>Monetization</Link>
//             </li>
//           </ul>
//         </li>
//         <li className="relative">
//           <Link className="flex items-center">Pricing</Link>
//         </li>
//         <li className="relative">
//           <Link className="flex items-center">Customers</Link>
//         </li>
//         <li>
//           <Link>Contact</Link>
//         </li>
//       </ul>

//       <div className="lg:flex lg:justify-end ml-auto mr-8 lg:mr-2">
//         {user && !loading ? (
//           <div className="lg:flex lg:items-center gap-5 ml-auto">
//             <span title={user.displayName} className="ml-auto">
//               <img
//                 className="w-10 h-10 rounded-full"
//                 src={user.photoURL}
//                 alt=""
//               />
//             </span>{" "}
//             <button
//               onClick={handleLogOut}
//               className="px-4 py-2 hover:bg-blue-700 text-lg font-bold rounded-lg"
//             >
//               Sing out
//             </button>
//           </div>
//         ) : (
//           !loading && (
//             <Link
//               to="/login"
//               className="lg:ml-auto px-2 py-1 lg:px-4 lg:py-2 text-lg font-bold rounded-lg"
//             >
//               Login
//             </Link>
//           )
//         )}
//       </div>
//       <span
//         onClick={() => setToggle(!toggle)}
//         className="absolute top-3 right-4 lg:hidden"
//       >
//         <FaAngleDown />
//       </span>
//     </div>
//   );
// };

// export default Navbar;
