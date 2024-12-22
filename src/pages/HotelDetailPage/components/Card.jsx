import React, { useEffect } from "react";
import "./Card.css";
function Card({ review, ...props }) {
  useEffect(()=>{
    console.log(review);
  },[])
  return (
    <div className="card p-2">
      <div>
        <img src={"/public/detailPage/pho.png"} />
      </div>
      <div className="flex ">
        <div className="mr-2">
          <img src={"/public/detailPage/de.png"} />
        </div>
        <div>Sofia</div>
      </div>
      <div className="mr-2">Our time at this hotel was marked by contemporary elegance and thoughtful amenities.</div>
      <div>
        <a>Read now </a>
      </div>
    </div>
  );
}

export default Card;
