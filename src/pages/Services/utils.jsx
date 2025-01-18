import axios from "axios";
import { url } from "../../url";
import { Login } from "@mui/icons-material";
import moment from "moment";

export const utils = {
    numberWithCommas : (x) =>{
     
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    convertDate: (checkin, checkout) => {
        console.log(checkin,checkout);
        const date1 = moment(checkin);
        const date2 = moment(checkout);
        let duration = date2.diff(date1, "days");
        const durationMoment = moment.duration(duration, "milliseconds");
        console.log(duration);
    
        // const diffTime = Math.abs(date2 - newDate1);
        // const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return duration;
      },
};
