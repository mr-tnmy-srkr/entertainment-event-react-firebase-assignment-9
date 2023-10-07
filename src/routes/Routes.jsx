import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import MainLayouts from "../layouts/MainLayouts";
import Events from "../pages/Events/Events";


    const routes = createBrowserRouter([
        {
          path: "/",
          element: <MainLayouts></MainLayouts>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
            {
              path: "/",
              element: <Home />,
            }, {
              path: "/events",
              element: <Events />,
            }, {
              path: "/bookTickets",
              element: <Home />,
            },
          ],
        },
      ]);


export default routes;