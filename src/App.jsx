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
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HotelDetailPage from "./pages/HotelDetailPage/HotelDetailPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import ProfilePage from "./pages/AccountPage/ProfilePage";
import PreferencesProfilePage from "./pages/AccountPage/PreferencesPage";
import PaymentInfoPage from "./pages/AccountPage/PaymentInfoPage";
import SupportPage from "./pages/AccountPage/SupportPage";
import SettingPage from "./pages/AccountPage/SettingPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import VerifyEmailPage from "./pages/VerifyEmailPage/VerifyEmailPage";
import EditInfoPage from "./pages/AccountPage/EditInfoPage";
import EditContactPage from "./pages/AccountPage/EditContactPage";
import PasswordPage from "./pages/AccountPage/PasswordPage";

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
    },
    {
      path: "/signup",
      element: <SignUpPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/forgot-passowrd",
      element: <ForgotPasswordPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/reset-passowrd",
      element: <ResetPasswordPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/verify-email",
      element: <VerifyEmailPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/account",
      element: <AccountPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "profile",
          element: <ProfilePage />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "edit-info",
              element: <EditInfoPage />,
              errorElement: <ErrorPage />,
            },
            {
              path: "edit-contact",
              element: <EditContactPage />,
              errorElement: <ErrorPage />,
            },
          ],
        },
        {
          path: "password",
          element: <PasswordPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "preferences",
          element: <PreferencesProfilePage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "payment",
          element: <PaymentInfoPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "support",
          element: <SupportPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "setting",
          element: <SettingPage />,
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "/hotel-detail/:hotelId",
      element: <HotelDetailPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={customerRouter} />

      <ToastContainer />
    </>
  );
}

export default App;
