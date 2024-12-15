import React, { useEffect } from "react";
import "./RoomsAndBed.css";
function RoomsAndBed({ hotel, ...props }) {
  useEffect(() => {
    console.log(hotel);
  }, []);
  return (
    <table class="table-auto">
      <thead>
        <tr>
          <th></th>

          <th>Room Name</th>
          <th>Number Of Guest</th>
          <th>Room Type</th>
          <th>Your Choices</th>
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
                  <img src={room.imgRoom} />
                </td>
                <td>{room.roomName}</td>

                <td className="">{room.maxOccupancy}</td>

                <td>{room.roomType}</td>
                <td>
                  <input type="select" />
                </td>
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

export default RoomsAndBed;
