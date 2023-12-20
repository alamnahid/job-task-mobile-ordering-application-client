import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import AddMobile from "../Pages/AddMobile/AddMobile";
import SignUp from "../Pages/Signup/SignUp";
import Login from "../Pages/Login/Login";
import AllMobile from "../Pages/AllMobile/AllMobile";
import MobileDetails from "../Pages/MobileDetails/MobileDetails";
import MyCart from "../Pages/MyCart/MyCart";
import ErrorElement from "../Components/ErrorElement/ErrorElement";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorElement/>,
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
        },
        {
          path: '/all-mobile/:id',
          element: <MobileDetails/>
        },
        {
          path: '/cart',
          element: <MyCart/>
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