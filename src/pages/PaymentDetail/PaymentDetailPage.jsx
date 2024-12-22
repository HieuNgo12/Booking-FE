import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PaymentPageBody from "./components/PaymentPageBody";
import { useParams } from "react-router-dom";
import { services } from "../Services/services";
import axios from "axios";
import { url } from "../../url";

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
    <div className="p-12">
      <Navbar />
      {room.length ? <PaymentPageBody room={room} /> : null}
      <Footer />
    </div>
  );
}

export default PaymentDetailPage;
