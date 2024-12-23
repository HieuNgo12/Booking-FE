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
import PasswordPage from "./pages/AccountPage/PasswordPage";
import BookingPage from "./pages/AccountPage/BookingPage";
import DetailBookingPage from "./pages/DetailBookingPage/DetailBookingPage";
import AuthenticationPage from "./pages/AccountPage/AuthenticationPage";
import EditEmailPage from "./pages/AccountPage/EditEmailPage";
import EditPhonePage from "./pages/AccountPage/EditPhonePage";
import EditIDCardPage from "./pages/AccountPage/EditIDCardPage";
import SupportChatPage from "./pages/AccountPage/SupportChatPage";
import SupportEmailPage from "./pages/AccountPage/SupportEmailPage";
import FilterPage from "./pages/AccountPage/FilterPage";
import RankPage from "./pages/AccountPage/RankPage";
import ConfirmPage from "./pages/ConfirmPage/ConfirmPage";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotelFavoriteListPage from "./pages/HotelFavoriteListPage/HotelFavoriteListPage";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("customer");

  console.log("check");
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
      path: "filter",
      element: <FilterPage />,
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
              path: "view-rank",
              element: <RankPage />,
              errorElement: <ErrorPage />,
            },
          ],
        },
        {
          path: "booking",
          element: <BookingPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "authentication",
          element: <AuthenticationPage />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "edit-email",
              element: <EditEmailPage />,
              errorElement: <ErrorPage />,
            },
            {
              path: "edit-phone",
              element: <EditPhonePage />,
              errorElement: <ErrorPage />,
            },
            {
              path: "edit-id-card",
              element: <EditIDCardPage />,
              errorElement: <ErrorPage />,
            },
          ],
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
          children: [
            {
              path: "chat-easyset",
              element: <SupportChatPage />,
              errorElement: <ErrorPage />,
            },
            {
              path: "sent-email-to-easyset",
              element: <SupportEmailPage />,
              errorElement: <ErrorPage />,
            },
          ],
        },
        {
          path: "setting",
          element: <SettingPage />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "password",
              element: <PasswordPage />,
              errorElement: <ErrorPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/hotel-detail/:hotelId",
      element: <HotelDetailPage />,
    },
    {
      path: "/booking-detail/:bookingId",
      element: <DetailBookingPage />,
    },

    {
      path: "/hotel-favorite-page",
      element: <HotelFavoriteListPage />,
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
