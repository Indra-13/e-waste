import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'

import ForgotPassowrd from '../pages/ForgotPassowrd'
import AdminPanel from '../pages/AdminPanel'
import AllUsers from '../pages/AllUsers'
import AllProducts from '../pages/AllProducts'
import CategoryProduct from '../pages/CategoryProduct'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import SearchProduct from '../pages/SearchProduct'
import { Login } from '../pages/Login'
import {SignUp} from '../pages/SignUp'
import E_wastePage from '../pages/E_wastePage'
import AllTraders from '../pages/AllTraders'
import AllEWaste from '../pages/Alle_waste'
import MyProfile from '../pages/MyProfile'
import TraderAccount from '../pages/TraderAccount'
import RewardSystem from '../pages/RewardSystem'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassowrd />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "product-category",
        element: <CategoryProduct />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "search",
        element: <SearchProduct />,
      },
      {
        path: "e-wastepage",
        element: <E_wastePage />,
      },
      {
        path: "myprofile",
        element: <MyProfile />,
      },
      {
        path: "TraderAccount",
        element: <TraderAccount />,
      },
      {
        path: "rewardpage",
        element:<RewardSystem/>
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
        children: [
          {
            path: "all-users",
            element: <AllUsers />,
          },
          {
            path: "all-products",
            element: <AllProducts />,
          },
          {
            path: "all-traders",
            element: <AllTraders />,
          },
          {
            path: "allE-waste",
            element: <AllEWaste />,
          },

        ],
      },
    ],
  },
]);


export default router