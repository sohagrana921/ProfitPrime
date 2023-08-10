import { Outlet } from "react-router-dom";

import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/footer/footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default MainLayout;
