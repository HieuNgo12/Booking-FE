import React, { useState } from "react";

function Questions({hotel,...props}) {
  const [openCard, setOpenCard] = useState(false);
  return (
    <div>
      {" "}
      <div
        className="black-card"
        onClick={() => {
          setOpenCard(!openCard);
        }}
      >
        How and When Do I Pay?
      </div>
      {openCard ? (
        <div>
          Since This option is a non-refundable reservation And there is no
          cancellation opportunity, payment is usually processed at the time of
          booking or shortly thereafter.
        </div>
      ) : null}
    </div>
  );
}

export default Questions;
