import { Outlet } from "react-router-dom";

import Navbar from "../Shared/Navbar/Navbar";
import FooterPage from "../Shared/Footer/FooterPage";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:min-h-[calc(100vh-450px)]">
        <Outlet></Outlet>
      </div>
      <FooterPage></FooterPage>
    </div>
  );
};

export default MainLayout;
