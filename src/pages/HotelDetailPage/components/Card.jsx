import React, { useEffect } from "react";
import "./Card.css";
function Card({ review, ...props }) {
  useEffect(()=>{
    console.log(review);
  },[])
  return (
    <div className="card p-2">
      <div style={{marginLeft: "25%"}}>
        <img style={{width: "50px", height:"50px"}} className="mb-6" src={review.userId.avatar} />
      </div>
      <div className="flex mb-6 ">
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
