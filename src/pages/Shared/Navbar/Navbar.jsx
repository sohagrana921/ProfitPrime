import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut, loading } = {};
  const [toggle, setToggle] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully signed out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const subMenuStyle = `
  li:hover > ul {
    display: block;
  }
`;
  return (
    <div className="bg-[#123426] text-white relative lg:grid lg:grid-cols-7 lg:justify-between lg:items-center flex items-center border-b border-gray-300">
      <style>{subMenuStyle}</style>
      <div className="flex items-center gap-2 lg:gap-3 col-span-2">
        <span className="text-white"><img className="lg:h-10 lg:w-10 w-6 h-6 ml-3 lg:ml-5" src="/profit-up.png" alt="logo" /></span>
        <h1 className="text-2xl font-bold pb-2 lg:pb-0">
          ProfitPrime
        </h1>
      </div>
      <ul
        className={`${
          toggle
            ? "top-9 lg:top-0 ease-in-out duration-500 lg:duration-0"
            : "-top-52 ease-in duration-500 lg:top-0 lg:duration-0"
        } text-lg font-medium lg:grid lg:grid-cols-5 gap-5 justify-between items-center lg:text-center lg:h-20 px-5 py-2 lg:py-0 lg:pb-0 absolute lg:relative -z-20 lg:z-20 bg-[#123426] w-full col-span-4`}
      >
        <li>
          <Link>Home</Link>
        </li>
        <li className="relative">
          <Link>Products</Link>
          <ul className="absolute hidden hover:block bg-[#123426] w-[200px] lg:top-[25px] left-24 lg:left-0 -mt-7 lg:-mt-0 pl-5 pb-3 lg:pt-10 -ml-2 text-left z-20">
            <li>
              <Link>Items 1</Link>
            </li>
            <li>
              <Link>Items 2</Link>
            </li>
            <li>
              <Link>Items 3</Link>
            </li>
            <li>
              <Link>Items 4</Link>
            </li>
          </ul>
        </li>
        <li className="relative">
          <Link>Pricing</Link>
          <ul className="absolute hidden hover:block bg-[#123426] w-[200px] lg:top-[25px] left-20 lg:left-0 -mt-7 lg:-mt-0 pl-5 pb-3 lg:pt-10 -ml-2 text-left z-20">
            <li>
              <Link>Items 1</Link>
            </li>
            <li>
              <Link>Items 2</Link>
            </li>
            <li>
              <Link>Items 3</Link>
            </li>
            <li>
              <Link>Items 4</Link>
            </li>
          </ul>
        </li>
        <li className="relative">
          <Link>Customers</Link>
          <ul className="absolute hidden hover:block bg-[#123426] w-[200px] lg:top-[25px] left-28 lg:left-0 -mt-7 lg:-mt-0 pl-5 pb-3 lg:pt-10 -ml-2 text-left z-20">
            <li>
              <Link>Items 1</Link>
            </li>
            <li>
              <Link>Items 2</Link>
            </li>
            <li>
              <Link>Items 3</Link>
            </li>
            <li>
              <Link>Items 4</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>

      <div className="lg:flex lg:justify-end ml-auto mr-8 lg:mr-2">
        {user && !loading ? (
          <div className="lg:flex lg:items-center gap-5 ml-auto">
            <span title={user.displayName} className="ml-auto">
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt=""
              />
            </span>{" "}
            <button
              onClick={handleLogOut}
              className="px-4 py-2 hover:bg-blue-700 text-lg font-bold rounded-lg"
            >
              Sing out
            </button>
          </div>
        ) : (
          !loading && (
            <Link
              to="/"
              className="lg:ml-auto px-2 py-1 lg:px-4 lg:py-2 text-lg font-bold rounded-lg"
            >
              Login
            </Link>
          )
        )}
      </div>
      <span
        onClick={() => setToggle(!toggle)}
        className="absolute top-3 right-4 lg:hidden"
      >
        <FaBars />
      </span>
    </div>
  );
};

export default Navbar;
