import React from "react";

const RelatedProducts = (props) => {
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          <img
            className="card-img-top"
            src={props.product.photoURL}
            alt="..."
            height="200rem"
            objectFit="cover"
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{props.product.name}</h5>$
              {props.product.price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent"></div>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
