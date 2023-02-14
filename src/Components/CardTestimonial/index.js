import React from "react";
import "./style.css";

import { Avatar } from "primereact/avatar";
import { Rating } from "primereact/rating";

const CardTestimonial = ({ photo, name, comment }) => {
  return (
    <div className="card-testimonial">
      <div className="grid justify-items-center">
        <Avatar
          shape="circle"
          size="xlarge"
          image={require(`../../assets/${photo}`)}
          imageAlt="testimonial"
        />
        <h4>{name}</h4>
      </div>
      <img
        className="star"
        src={require("../../assets/Stars.webp")}
        alt="star"
      />
      <p>{comment}</p>
    </div>
  );
};

export default CardTestimonial;
