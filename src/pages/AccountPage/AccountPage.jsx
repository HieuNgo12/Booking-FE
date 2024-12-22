import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SideBarAccountPage from "./SideBarAccountPage";
import ProfilePage from "./ProfilePage";
import PaymentInfoPage from "./PaymentInfoPage";
import EditInfoPage from "./EditInfoPage";
import SupportPage from "./SupportPage";
import SettingPage from "./SettingPage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AuthenticationPage from "./AuthenticationPage";
import BookingPage from "./BookingPage";
import PasswordPage from "./PasswordPage";
import PreferencesPage from "./PreferencesPage";
import EditEmailPage from "./EditEmailPage";
import EditPhonePage from "./EditPhonePage";
import EditIDCardPage from "./EditIDCardPage";
import SupportChatPage from "./SupportChatPage";
import SupportEmailPage from "./SupportEmailPage";
import RankPage from "./RankPage";

const listRoutes = [
  { namePage: ProfilePage, namePath: "/profile" },
  { namePage: BookingPage, namePath: "/booking" },
  { namePage: AuthenticationPage, namePath: "/authentication" },
  { namePage: PreferencesPage, namePath: "/preferences" },
  { namePage: PaymentInfoPage, namePath: "/payment" },
  { namePage: SupportPage, namePath: "/support" },
  { namePage: SettingPage, namePath: "/setting" },
  { namePage: EditInfoPage, namePath: "/profile/edit-info" },
  { namePage: EditEmailPage, namePath: "/authentication/edit-email" },
  { namePage: EditPhonePage, namePath: "/authentication/edit-phone" },
  { namePage: EditIDCardPage, namePath: "/authentication/edit-id-card" },
  { namePage: PasswordPage, namePath: "/setting/password" },
  { namePage: SupportEmailPage, namePath: "/support/sent-email-to-easyset" },
  { namePage: SupportChatPage, namePath: "/support/chat-easyset" },
  { namePage: RankPage, namePath: "/profile/view-rank" },
];

const AccountPage = () => {
  const [dataUser, setdDataUser] = useState(null);

  const callApi = async () => {
    try {
      let req1 = await fetch(`${import.meta.env.VITE_URL_API}/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (req1.status === 401) {
        const req2 = await fetch(
          `${import.meta.env.VITE_URL_API}/refresh-token`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        if (req2.ok) {
          let req1 = await fetch(`${import.meta.env.VITE_URL_API}/profile`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
          if (req1.ok) {
            let res1 = await req1.json();
            setdDataUser(res1.data);
          }
        }
      }
      if (req1.ok) {
        let res1 = await req1.json();
        setdDataUser(res1.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error internal", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          maxWidth: "1200px",
          margin: "20px auto",
          backgroundColor: "#f9f9f9",
          borderBottom: "1px solid #ddd",
          borderRadius: "8px 8px 0 0",
        }}
      >
        <h3 style={{ color: "#07689F", margin: 0, fontWeight: 700 }}>
          Manage My Account
        </h3>
        <div style={{ margin: 0 }}>
          <div className="text-right">
            Hi ,{" "}
            <span
              style={{ color: "#07689F", fontWeight: "bold" }}
            >{`${dataUser?.firstName} ${dataUser?.lastName}`}</span>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "1200px",
          height: "90vh",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "0 0 8px 8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <SideBarAccountPage />
        <Routes>
          {listRoutes.map((item, index) => (
            <Route
              key={index}
              path={item.namePath}
              element={<item.namePage dataUser={dataUser} callApi={callApi} />}
            />
          ))}
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default AccountPage;
