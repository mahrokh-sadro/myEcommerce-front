import React from "react";

const RelatedProducts = (props) => {
  return (
    <>
      <div class="col mb-5">
        <div class="card h-100">
          {/* <!-- Product image--> */}
          <img
            class="card-img-top"
            src={props.product.photoURL}
            alt="..."
            height="200rem"
            object-fit="cover"
          />
          {/* <!-- Product details--> */}
          <div class="card-body p-4">
            <div class="text-center">
              {/* <!-- Product name--> */}
              <h5 class="fw-bolder">{props.product.name}</h5>
              {/* <!-- Product price--> */}${props.product.price}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent"></div>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;

//race shortcut
