import React from "react";
import "./RoomsAndBed.css";
import { addDefaultSrc } from "../../Services/defaultImage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function RoomsAndBed({ disable, hotel, ...props }) {
  useEffect(() => {
    console.log(hotel);
  }, []);
  let navigate = useNavigate();

  const onBook = (e, id) => { 
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
          <th>Room Type</th>
          <th>Number Of Guest</th>
          <th>Today's Price</th>
          <th>Your Choices</th>
          <th>Select Room</th>
          <th>Today's Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="select" />
          </td>

          <td>
            <input type="select" />
          </td>

                <td>{room.roomType}</td>

                <td>{room.detailRoom}</td>
                <td>
                  <button>{room.pricePerNight} $</button>
                </td>
                <td>
                  {disable ? (
                    <button className="book-now-button">
                      <a
                        className="book-now-button"
                        href={`/payment-detail/${hotel[0].roomId[0]._id}`}
                      >
                        Book Now
                      </a>
                    </button>
                  ) : null}
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
