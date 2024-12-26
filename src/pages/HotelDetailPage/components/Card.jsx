import React, { useEffect } from "react";
import "./Card.css";
function Card({ review, ...props }) {
  useEffect(()=>{
    console.log(review);
  },[])
  return (
    <div className="card p-2">
      <div>
        <img style={{width: "50px", height:"50px"}} src={review.userId.avatar} />
      </div>
      <div className="flex ">
        <div className="mr-2">
          <img src={"/public/detailPage/de.png"} />
        </div>
        <div>{review.userId.firstName}</div>
      </div>
      <div className="mr-2">{review.comment}</div>
      <div>
        <a>Read now </a>
      </div>
    </div>
  );
}

export default Card;
