import axios from "axios";


export const services = {
    getHotel : async () => {
        const dataUrl = `${url}/api/v1/hotel/${hotelId}`;
        const data = await axios.get(dataUrl);
        return data;
    }
}