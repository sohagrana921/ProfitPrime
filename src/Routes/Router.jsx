import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../pages/Layout/MainLayout";
import Login from "../pages/Login&Register/Login";
import Register from "../pages/Login&Register/Register";
import DataAnalysis from "../pages/Products/DataAnalysis";
import ConsultingProducts from "../pages/Home/ConsultingProducts/ConsultingProducts";
import CustomerService from "../pages/Home/CustomerService/CustomerService";
import BussinessOption from "../pages/Products/BussinessOption";
import CompetitorSolution from "../pages/Products/CompetitorSolution";
import Pricing from "../Components/Pricing";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import DashHome from "../Dashboard/DashHome/DashHome";
import Payment from "../pages/Payment/Payment";
import UpscaleCustomer from "../pages/Home/UpscaleCustomer/UpscaleCustomer";
import HybridCustomer from "../pages/Home/HybridCustomer/HybridCustomer";
import Contact from "../Components/Contact";
import CustomerInformation from "../pages/Information/CustomerInformation";
import AdminHome from "../Dashboard/Admin/adminHome";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import ShowHome from "../Dashboard/Dashboard/ShowHome/ShowHome";
import BusinessRevenue from "../pages/Home/Revenue/BusinessRevenue";
import CosultingRevenue from "../pages/Home/Revenue/CosultingRevenue";
import DataRevenue from "../pages/Home/Revenue/DataRevenue";
import PrimeUsers from "../Dashboard/Admin/PrimeUsers";
import BasicUsers from "../Dashboard/Admin/BasicUsers";
import PaymentHistory from "../pages/Payment/PaymentHistory";
import Profile from "../Dashboard/Dashboard/Profile/Profile";
import CompanyData from "../pages/Home/FreeDemo/CompanyData";
import FreeDemo from "../pages/Home/FreeDemo/FreeDemo";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dataAnalysis",
        element: <DataAnalysis></DataAnalysis>,
      },
      {
        path: "/consulting",
        element: <ConsultingProducts></ConsultingProducts>,
      },
      {
        path: "/businessoption",
        element: <BussinessOption />,
      },
      {
        path: "/competitor",
        element: <CompetitorSolution />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/free",
        element: (
          <PrivateRoute>
            <CompanyData></CompanyData>
          </PrivateRoute>
        ),
      },
      {
        path: "/freeDemo",
        element: (
          <PrivateRoute>
            <FreeDemo></FreeDemo>
          </PrivateRoute>
        ),
      },
      {
        path: "/customerService",
        element: <CustomerService></CustomerService>,
      },
      {
        path: "/upscale",
        element: <UpscaleCustomer></UpscaleCustomer>,
      },
      {
        path: "/hybridcustomer",
        element: <HybridCustomer></HybridCustomer>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/info",
        element: <CustomerInformation />,
      },
      {
        path: "/payment/:plan/:billingOption",
        element: <Payment />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/resetPassword",
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // Admin Works
      {
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "primeusers",
        element: <PrimeUsers></PrimeUsers>,
      },
      {
        path: "basicusers",
        element: <BasicUsers></BasicUsers>,
      },

      //Users Works
      {
        path: "dashhome",
        element: <DashHome></DashHome>,
      },
      {
        path: "showhome",
        element: <ShowHome></ShowHome>,
      },
      {
        path: "help",
        element: <Contact />,
      },
      {
        path: "businessRevenue",
        element: <DataRevenue></DataRevenue>,
      },
      {
        path: "cosultingRevenue",
        element: <CosultingRevenue></CosultingRevenue>,
      },
      {
        path: "dataRevenue",
        element: <BusinessRevenue></BusinessRevenue>,
      },
      {
        path: "pay",
        element: <PaymentHistory />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
export default router;
