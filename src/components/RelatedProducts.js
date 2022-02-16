import React, { useState, useEffect } from "react";

const RelatedProducts = (props) => {
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          {/* <!-- Product image--> */}
          <img
            className="card-img-top"
            src={props.product.photoURL}
            alt="..."
            height="200rem"
            objectFit="cover"
          />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{props.product.name}</h5>
              {/* <!-- Product price--> */}${props.product.price}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent"></div>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
