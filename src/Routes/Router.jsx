import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../pages/Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
