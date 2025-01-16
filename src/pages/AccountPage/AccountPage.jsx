import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccountPageBody from "./AccountPageBody";
import ChatBox from "../ChatPage/ChatBox";

function AccountPage() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex w-full sticky top-0 bg-[#F9F9F9] justify-center ">
        <Navbar />
      </div>
      <div className="max-w-[1224px]">
        <AccountPageBody />
      </div>
      <Footer />
      <ChatBox />
    </div>
  );
}

export default AccountPage;
