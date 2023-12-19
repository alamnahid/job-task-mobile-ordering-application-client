import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import AddMobile from "../Pages/AddMobile/AddMobile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: '/add-mobile',
          element: <AddMobile/>
        }
      ]
    },
  ]);

  export default router;