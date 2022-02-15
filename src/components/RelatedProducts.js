import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RelatedProducts = ({ id }) => {
  const [relatedProducts, setRelatedProduct] = useState([]);

  useEffect(() => {
    fetch(`https://eemart.herokuapp.com/products/related/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setRelatedProduct(json.data);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, [id]);

  return (
    <>
      {relatedProducts?.map((e) => (
        <div className="col mb-5">
          <div className="card h-100">
            {/* <!-- Product image--> */}
            <img
              className="card-img-top"
              src={e.photoURL}
              alt="..."
              height="200rem"
              objectFit="cover"
            />
            {/* <!-- Product details--> */}
            <div className="card-body p-4">
              <div className="text-center">
                {/* <!-- Product name--> */}
                <h5 className="fw-bolder">{e.name}</h5>
                {/* <!-- Product price--> */}${e.price}
              </div>
            </div>
            {/* <!-- Product actions--> */}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedProducts;
