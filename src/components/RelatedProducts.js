import React from "react";
import { Link } from "react-router-dom";

const RelatedProducts = (props) => {
  return (
    <div>
      {/* {props.products.map(e=>e.name+" ")} */}
      {/* <section class="py-5 bg-light">
            <div class="container px-4 px-lg-5 mt-5">
                <h2 class="fw-bolder mb-4">Related products</h2> */}
      {/* <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"> */}
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
              {/* <!-- Product price--> */}
              $40.00 - $80.00
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              <a class="btn btn-outline-dark mt-auto" href="#">
                <Link to={`/product/details/${props.product._id}`}>
                  View options
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
    // </section>
    // </div>
  );
};

export default RelatedProducts;

//race shortcut
