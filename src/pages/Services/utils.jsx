import axios from "axios";
import { url } from "../../url";
import { Login } from "@mui/icons-material";
import moment from "moment";

export const utils = {
  numberWithCommas: (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  convertDate: (checkin, checkout) => {
    console.log(checkin, checkout);
    const date1 = moment(checkin);
    const date2 = moment(checkout);
    let duration = date2.diff(date1, "days");
    const durationMoment = moment.duration(duration, "milliseconds");
    console.log(duration);

    // const diffTime = Math.abs(date2 - newDate1);
    // const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return duration;
  },
  returnAmenities: (amenity) => {
    switch (amenity) {
      case "WiFi":
        return "/detailPage/wifi.png";
      case "Air Conditioning":
        return "/detailPage/air-conditioning.png";
      case "Mini Bar":
        return "/detailPage/tea-coffe.png";
      case "TV":
        return "/detailPage/room-service.png";
      case "Restaurant":
        return "/detailPage/restaurant.png";
      case "Bathroom":
        return "/detailPage/bathroom.png";
      case "Parking Available":
        return "/detailPage/parking-available.png";
      case "Fitness Center":
        return "/detailPage/fitness-center.png";
    }
  },
};
