import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import MainLayouts from "../layouts/MainLayouts";
import Events from "../pages/Events/Events";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import { getEvents } from "../utils/getProducts";
import ViewDetails from "../pages/VewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import Gallery from "../pages/Gallery/Gallery";


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
      },{
        path: "/viewDetails/:id",
        element: <PrivateRoute><ViewDetails /></PrivateRoute>,
        loader: getEvents,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/bookTickets",
        element: <Home />,
      }, {
        path: "/gallery",
        element: <PrivateRoute><Gallery /></PrivateRoute>,
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
