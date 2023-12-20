import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import AddMobile from "../Pages/AddMobile/AddMobile";
import SignUp from "../Pages/Signup/SignUp";
import Login from "../Pages/Login/Login";
import AllMobile from "../Pages/AllMobile/AllMobile";

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
        },
        {
          path: '/all-mobile',
          element: <AllMobile/>
        }
      ]
    },
    {
      path: '/signup',
      element: <SignUp/>
    },
    {
      path: '/login',
      element: <Login/>
    }
  ]);

  export default router;