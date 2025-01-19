import React, { useEffect, useState } from "react";
import "./ConfirmTable.css";
import moment from "moment";
import { services } from "../../Services/services";
import { utils } from "../../Services/utils";
function ConfirmTable({ booking, ...props }) {
  const [diff, setDiff] = useState("");
  useEffect(() => {
    console.log(booking);
    var date1 = moment(booking[0]?.bookingStartDate);
    var date2 = moment(booking[0]?.bookingEndDate);
    var diff = date2.diff(date1);
    setDiff(diff);
  }, []);
  return (
    <div>
      <div className="">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Stays
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="flex">
                    <div>
                      <img
                        src="/confirmpage/check-in-calendar.png"
                        style={{ width: "32px", height: "32px" }}
                      />
                    </div>
                    <div className="ml-2">Check-In</div>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="flex">
                    <div>
                      {" "}
                      <img
                        src="/confirmpage/check-out-calendar.png"
                        style={{ width: "32px", height: "32px" }}
                      />
                    </div>
                    <div className="ml-2">Check-Out</div>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                  Room Type
                </th>
                <th scope="col" class="px-6 py-3">
                  Bed Type
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" class="">
                  {utils.convertDate(booking[0]?.bookingStartDate,booking[0]?.bookingEndDate) + " "}
                  Nights
                </td>
                {booking.length ? (
                  <td class="px-6 py-4">
                    {booking[0].bookingStartDate.slice(0,10)}
                  </td>
                ) : null}
                {booking.length ? (
                  <td class="px-6 py-4">
                    {booking[0].bookingEndDate.slice(0,10)}
                  </td>
                ) : null}{" "}
                <td class="px-6 py-4">2 Rooms</td>
                <td class="px-6 py-4">Double</td>
                <td class="px-6 py-4">Two Twin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ConfirmTable;
