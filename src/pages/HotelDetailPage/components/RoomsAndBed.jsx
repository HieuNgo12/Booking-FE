import React, { useEffect } from "react";
import "./RoomsAndBed.css";
import { addDefaultSrc } from "../../Services/defaultImage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function RoomsAndBed({ hotel, ...props }) {
  useEffect(() => {
    console.log(hotel);
  }, []);
  let navigate = useNavigate();

  const onBook = (e,id) => {
    // alert("Book Success")
    e.preventDefault();

    toast.success("Book Success", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // onClose: () => setModal(false),
    });
    navigate(`/payment-detail/${id}`);
  };
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
          <th>Book Now</th>
        </tr>
      </thead>
      <tbody className="content-center	">
        {hotel[0].roomId?.length ? (
          hotel[0].roomId.map((room) => {
            console.log(room);
            return (
              <tr>
                <td>
                  <img src={room.imgRoom} onError={(ev) => addDefaultSrc(ev)} />
                </td>
                <td>{room.roomName}</td>

                <td className="">{room.maxOccupancy}</td>

                <td>{room.roomType}</td>

                <td>{room.detailRoom}</td>
                <td>
                  <button>{room.pricePerNight} $</button>
                </td>
                <td>
                  <button className="book-now-button">
                    <a
                      href=""
                      onClick={(e) => {
                        onBook(e,room._id);
                      }}
                    >
                      Book Now
                    </a>
                  </button>
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
