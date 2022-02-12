import React from "react";

const ProductDescription = (props) => (
  <>
    <div className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              class="card-img-top mb-5 mb-md-0"
              src={props.product.photoURL}
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="small mb-1">SKU: BST-498</div>
            <h1 className="display-5 fw-bolder">{props.product.name}</h1>
            <div className="fs-5 mb-5">
              <span className="text-decoration-line-through">
                ${props.product.price}
              </span>
            </div>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium at dolorem quidem modi. Nam sequi consequatur
              obcaecati excepturi alias magni, accusamus eius blanditiis
              delectus ipsam minima ea iste laborum vero?
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* </div> */}
  </>
);

export default ProductDescription;
