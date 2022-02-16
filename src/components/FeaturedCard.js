import React from "react";
import { Link } from "react-router-dom";

const FeaturedCard = (props) => {
  return (
    <>
      <Link to={`/product/details/${props.id}`}>
        <img
          src={props.image}
          alt={props.name}
          style={{ maxHeight: "14rem", objectFit: "cover" }}
        />
      </Link>
    </>
  );
};

export default FeaturedCard;
