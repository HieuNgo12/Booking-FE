import React, { useEffect } from "react";
import "./Card.css";
function Card({ review, ...props }) {
  useEffect(() => {
    console.log(review);
  }, []);
  return (
    <div className="card p-2">
      <div style={{ marginLeft: "20%" }}>
        <img
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          className="mb-6"
          src={review.userId.avatar}
        />
      </div>
      <div className="flex mb-6 ">
        <div className="mr-2 mt-1" >
          <img src={"/public/detailPage/de.png"} />
        </div>
        <div className="name">{review.userId.firstName}</div>
      </div>
      <div className="bg-slate-100 p-2">
        <div className="mr-2 mb-6" >{`" ` + review.comment + ` "`}</div>
        <div className="read-more">
          <a>Read more </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
