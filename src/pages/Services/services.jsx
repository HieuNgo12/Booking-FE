import axios from "axios";
import { url } from "../../url";
import { Login } from "@mui/icons-material";

export const services = {
  getHotel: async (hotelId) => {
    const dataUrl = `${url}/api/v1/hotel/${hotelId}`;
    const data = await axios.get(dataUrl);
    return data;
  },
  getHotelList: async () => {
    const dataUrl = `${url}/api/v1/get-hotel`;
    const data = await axios.get(dataUrl);
    return data;
  },
  getRoomById: async (roomId) => {
    const dataUrl = `${url}/api/v1/getRoomById/${roomId}`;
    const data = await axios.get(dataUrl);
    return data;
  },
  getHotelListSearch: async (body) => {
    const dataUrl = `${url}/api/v1/getHotelList`;
    const data = await axios.post(dataUrl, body || {});
    return data;
  },
  getHotelListSearchByQuery: async (body, itemsPerPage, currentPage) => {
    const dataUrl = `${url}/api/v1/getHotelListByQuery?limit=${itemsPerPage}&page=${currentPage}`;
    const data = await axios.post(
      dataUrl,
      { ...body, page: currentPage, limit: itemsPerPage } || {
        page: currentPage,
        limit: itemsPerPage,
      }
    );
    return data;
  },
  getBookingById: async (bookingId) => {
    const dataUrl = `${url}/api/v1/getBookingById/${bookingId}`;
    const data = await axios.get(dataUrl);
    return data;
  },
  postRoomSearch: async (body) => {
    const dataUrl = `${url}/api/v1/searchRoom`;
    const data = await axios.post(dataUrl, body);
    return data;
  },
  createBooking: async (body) => {
    console.log(body);
    const dataUrl = `${url}/api/v1/createBookingWithoutAuthen`;
    const data = await axios.post(dataUrl, body);
    return data;
  },
  applyPromoCode: async (body) => {
    console.log(body);
    const dataUrl = `${url}/api/v1/applyPromo`;
    const data = await axios.post(dataUrl, body);
    return data;
  },
  createVNPay: async (body) => {
    console.log(body);
    const dataUrl = `${url}/api/v1/create-payment-vnpay`;
    const data = await axios.post(dataUrl, body);
    return data;
  },
};
