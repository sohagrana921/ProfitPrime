import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mx-auto">
    <RouterProvider router={router} />
  </div>
);
