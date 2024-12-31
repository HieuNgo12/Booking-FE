import React from "react";
import "./HotelInfo.css";
import { addDefaultSrc } from "../../Services/defaultImage";
function HotelInfo({ hotel, ...props }) {
  return (
    <table class="table-auto">
      <thead>
        <tr>
          <th></th>

          <th>Room Name</th>
          <th>Number Of Guest</th>
          <th>Room Type</th>
          <th>Room Detail</th>
          <th>Today's Price</th>
        </tr>
      </thead>
      <tbody className="content-center	">
        {hotel[0].roomId?.length ? (
          hotel[0].roomId.map((room) => {
            console.log(room);
            return (
              <tr>
                <td>
                  <img src={room.imgRoom}          onError={(ev) =>  addDefaultSrc(ev) }
/>
                </td>
                <td>{room.roomName}</td>

                <td className="">{room.maxOccupancy}</td>

                <td>{room.roomType}</td>
             
                <td>{room.detailRoom}</td>
                <td>
                  <button>{room.pricePerNight} $</button>
                </td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
}

export default HotelInfo;
