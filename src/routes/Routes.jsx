import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/home/Home";
import MainLayouts from "../layouts/MainLayouts";


    const routes = createBrowserRouter([
        {
          path: "/",
          element: <MainLayouts></MainLayouts>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
            {
              path: "/",
              element: <Home />,
            },
          ],
        },
      ]);


export default routes;