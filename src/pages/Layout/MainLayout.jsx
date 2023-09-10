import { Outlet } from "react-router-dom";

import Navbar from "../Shared/Navbar/Navbar";
import FooterPage from "../Shared/Footer/FooterPage";


const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <FooterPage></FooterPage>
    </div>
  );
};

export default MainLayout;
