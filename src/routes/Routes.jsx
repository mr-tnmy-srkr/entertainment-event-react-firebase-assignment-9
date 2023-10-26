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
import ContactUs from "../pages/ContactUs/ContactUs";
import LoginPrivate from "./LoginPrivate";


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
        path: "/gallery",
        element: <PrivateRoute><Gallery /></PrivateRoute>,
      },
      {
        path: "/worldEvents",
        element: <PrivateRoute><Events /></PrivateRoute>,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      }, 
      {
        path: "/login",
        element: <LoginPrivate><Login /></LoginPrivate>,
      },
      {
        path: "/signup",
        element:<LoginPrivate><Signup /></LoginPrivate> ,
      },
    ],
  },
]);

export default routes;
