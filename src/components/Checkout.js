import React, { useState, useEffect } from "react";
import {
  getBraintreeClientToken,
  processPayment,
  createOrder,
} from "./apiCore";

import { isAuthenticated } from "./apiCore";
import { emptyCart } from "./cartHelpers";

import { Link } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";

const Checkout = ({ products }) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: "",
    instance: {},
    address: "",
  });

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getToken = (userId, token) => {
    getBraintreeClientToken(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
        setData({ ...data, error: data.error });
      } else {
        console.log(data);
        setData({ clientToken: data.clientToken });
      }
    });
  };

  useEffect(() => {
    getToken(userId, token);
  }, []);

  const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const showError = (error) => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const buy = () => {
    setData({ loading: true });

    let nonce;
    let getNonce = data.instance
      .requestPaymentMethod()
      .then((data) => {
        nonce = data.nonce;

        const paymentData = {
          paymentMethodNonce: nonce,
          amount: getTotal(products),
        };

        processPayment(userId, token, paymentData)
          .then((response) => {
            console.log(response);

            const createOrderData = {
              products: products,
              transaction_id: response.transaction.id,
              amount: response.transaction.amount,
              // address: deliveryAddress,
            };

            createOrder(userId, token, createOrderData)
              .then((response) => {
                emptyCart(() => {
                  //   setRun(!run); // run useEffect in parent Cart
                  console.log("payment success and empty cart");
                  setData({
                    loading: false,
                    success: true,
                  });
                });
              })
              .catch((error) => {
                console.log(error);
                setData({ loading: false });
              });
          })
          .catch((error) => {
            console.log(error);
            setData({ loading: false });
          });
      })
      .catch((error) => {
        setData({ ...data, error: error.message });
      });
  };

  const handleAddress = (event) => {
    setData({ ...data, address: event.target.value });
  };

  const showDropIn = () => (
    <div>
      <div style={{ textAlign: "center" }}>
        <DropIn
          options={{
            authorization: data.clientToken,
          }}
          onInstance={(instance) => (data.instance = instance)}
        />
        <button onClick={buy} className="btn btn-success btn-block" />
      </div>
    </div>
  );

  return (
    <>
      <div className="mr-n5">
        <div className="card text-center">
          <div className="card-body">
            <Link to="/payment" className="btn btn-primary btn-block" abs="abs">
              Go To Checkout
            </Link>

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
