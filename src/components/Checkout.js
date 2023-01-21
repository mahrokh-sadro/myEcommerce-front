import React from "react";

const Checkout = ({ products }) => {
  const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  return (
    <>
      <div className="mr-n5">
        <div className="card text-center">
          <div className="card-body">
            <button
              to="/payment"
              className="btn btn-primary btn-block"
              abs="abs"
              disabled
            >
              Go To Checkout
            </button>

            <div class="d-flex justify-content-between">
              <div>Items Price</div>
              <div>${getTotal()}</div>
            </div>

            <div class="d-flex justify-content-between">
              <div>Shipping</div>
              <div>$20</div>
            </div>

            <div class="d-flex justify-content-between">
              <div>Taxes</div>
              <div>${getTotal() * 0.1}</div>
            </div>
            <hr />
            <div class="bg-light d-flex justify-content-between">
              <h5>Total:</h5>
              <h5>${getTotal() * 1.1}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
