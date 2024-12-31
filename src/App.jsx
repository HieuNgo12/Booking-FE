import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { ToastContainer } from "react-toastify";
import HotelSearchPage from "./pages/HotelSearchPage/HotelSearchPage";
import PaymentDetailPage from "./pages/PaymentDetail/PaymentDetailPage";
import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import HotelDetailPage from "./pages/HotelDetailPage/HotelDetailPage";
import TourList from "./pages/Tour/TourList";

import TourDetailPage from "./pages/Tour/TourDetailPage";
import SearchPage from "./pages/Tour/SearchPage.jsx";



function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("customer");

  const adminRouter = createBrowserRouter([
    {
      path: "/",
      // element: <HomePage />,
      // errorElement: <ErrorPage />,
      children: [],
    },
  ]);

  const customerRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
      children: [],
    },
    {
      path: "/hotel-search",
      element: <HotelSearchPage />,
      errorElement: <ErrorPage />,
      children: [],
    },
    {
      path: "/payment-detail",
      element: <PaymentDetailPage />,
      errorElement: <ErrorPage />,
      children: [],
    },
    {
      path: "/login",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
      children: [],
    },
    {
      path: "/signup",
      element: <SignUpPage />,
      errorElement: <ErrorPage />,
      children: [],
    },
    {
      path: "/hotel-detail/:hotelId",
      element: <HotelDetailPage />,
    },
    {
      path: "/tour-list",
      element: <TourList/>,
    },
    {
      path: "/tour/:tourId",
      element: <TourDetailPage />,
    },
    {
      path: "/search-tour",
      element: <SearchPage/>,
    }

  ]);

  return (
    <>
      <RouterProvider router={customerRouter} />

      <ToastContainer />
    </>
  );
}

export default App;
