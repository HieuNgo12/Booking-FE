import axios from "axios";
import { url } from "../../url";


export const services = {
    getHotel : async () => {
        const dataUrl = `${url}/api/v1/hotel/${hotelId}`;
        const data = await axios.get(dataUrl);
        return data;
    },
    getHotelList : async () => {
        const dataUrl = `${url}/api/v1/get-hotel`;
        const data = await axios.get(dataUrl);
        return data;
    },
}