import React from "react";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";

const FeaturedCard = (props) => {
  return (
    <>
      {/* <h5>{props.name}</h5> */}
      <a href={`/product/details/${props.id}`}>
        <img
          src={props.image}
          alt={props.name}
          style={{ maxHeight: "14rem", "object-fit": "cover" }}
        />
      </a>
    </>
  );
};

export default FeaturedCard;
