import React from "react";
import "./style.css";

const CardUs = ({ url }) => {
  return (
    <img
      src={require(`../../assets/${url}.JPG`)}
      alt="img-gallery"
      className="card-img"
    />
  );
};

export default CardUs;
