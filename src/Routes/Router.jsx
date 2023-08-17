import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../pages/Layout/MainLayout";
import Login from "../pages/Login&Register/Login";
import Register from "../pages/Login&Register/Register";
import DataAnalysis from "../pages/Products/DataAnalysis";
import ConsultingProducts from "../pages/Home/ConsultingProducts/ConsultingProducts";
import CustomerService from "../pages/Home/CustomerService/CustomerService";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/consulting',
        element: <ConsultingProducts></ConsultingProducts>
      },
      {
        path: '/customerService',
        element: <CustomerService></CustomerService>
      }
    ],
  },
]);
export default router;
