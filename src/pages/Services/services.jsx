import axios from "axios";
import { url } from "../../url";

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
  getHotelListSearch: async (itemsPerPage, currentPage) => {
    const dataUrl = `${url}/api/v1/getHotelList?limit=${itemsPerPage}&page=${currentPage}`;
    const data = await axios.post(dataUrl);
    return data;
  },
  getBookingById: async (bookingId) => {
    const dataUrl = `${url}/api/v1/getBookingById/${bookingId}`;
    const data = await axios.get(dataUrl);
    return data;
  },
  postRoomSearch: async ( body) => {
    const dataUrl = `${url}/api/v1/searchRoom`;
    const data = await axios.post(dataUrl, body);
    return data;
  },
  createBooking: async ( body) => {
    const dataUrl = `${url}/api/v1/createBookingWithoutAuthen`;
    const data = await axios.post(dataUrl, body);
    return data;
  },
};
