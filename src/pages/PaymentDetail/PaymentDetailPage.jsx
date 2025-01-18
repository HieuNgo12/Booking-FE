import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PaymentPageBody from "./components/PaymentPageBody";
import { useParams } from "react-router-dom";
import { services } from "../Services/services";
import axios from "axios";
import { url } from "../../url";
import ChatBox from "../ChatPage/ChatBox";

function PaymentDetailPage() {
  const [room, setRoom] = useState([]);
  const { roomId } = useParams();
  useEffect(() => {
    const getRoom = async () => {
      console.log(roomId);
      const data = await services.getRoomById(roomId);
      console.log(data);
      setRoom([data.data.data]);
    };
    getRoom();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex w-full sticky top-0 bg-[#F9F9F9] justify-center z-10">
        <Navbar />{" "}
      </div>
      <div className="max-w-[1224px]">
        {room.length ? <PaymentPageBody room={room} /> : null}
      </div>
      <Footer />
      <ChatBox />
    </div>
  );
}

export default PaymentDetailPage;
