import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import MainLayouts from "../layouts/MainLayouts";
import Events from "../pages/Events/Events";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import { getEvents } from "../utils/getProducts";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getEvents,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/bookTickets",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default routes;
