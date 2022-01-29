import React, { useState, useEffect } from "react";
import {
  getProducts,
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

  //   const showCheckout = () => {
  //     return isAuthenticated() ? (
  //       <div>{showDropIn()}</div>
  //     ) : (
  //       <Link to="/signin">
  //         <button className="btn btn-primary">Sign in to checkout</button>
  //       </Link>
  //     );
  //   };

  //   const showCheckout = () => {
  //     return <div>{showDropIn()}</div>;
  //   };

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
    // send the nonce to your server
    // nonce = data.instance.requestPaymentMethod()
    let nonce;
    let getNonce = data.instance
      .requestPaymentMethod()
      .then((data) => {
        // console.log(data);
        nonce = data.nonce;
        // once you have nonce (card type, card number) send nonce as 'paymentMethodNonce'
        // and also total to be charged
        // console.log(
        //     "send nonce and total to process: ",
        //     nonce,
        //     getTotal(products)
        // );
        const paymentData = {
          paymentMethodNonce: nonce,
          amount: getTotal(products),
        };

        processPayment(userId, token, paymentData)
          .then((response) => {
            console.log(response);
            // empty cart
            // create order

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
        // console.log("dropin error: ", error);
        setData({ ...data, error: error.message });
      });
  };

  const handleAddress = (event) => {
    setData({ ...data, address: event.target.value });
  };

  //   const showDropIn = () => (
  //     <div onBlur={() => setData({ ...data, error: "" })}>
  //       {data.clientToken !== null && products.length > 0 ? (
  //         <div>
  //           <div className="gorm-group mb-3">
  //             <label className="text-muted">Delivery address:</label>
  //             <textarea
  //               onChange={handleAddress}
  //               className="form-control"
  //               value={data.address}
  //               placeholder="Type your delivery address here..."
  //             />
  //           </div>

  //           <DropIn
  //             options={{
  //               authorization: data.clientToken,
  //               paypal: {
  //                 flow: "vault",
  //               },
  //             }}
  //             onInstance={(instance) => (data.instance = instance)}
  //           />
  //           {/* <button onClick={buy} className="btn btn-success btn-block"> */}
  //           <button className="btn btn-success btn-block">Pay</button>
  //         </div>
  //       ) : null}
  //     </div>
  //   );

  const showDropIn = () => (
    <div onBlur={() => setData({ ...data, error: "" })}>
      {/* {data.clientToken !== null && products.length > 0 ? ( */}
      <div>
        <div className="gorm-group mb-3">
          <label className="text-muted">Delivery address:</label>
          <textarea
            // onChange={handleAddress}
            className="form-control"
            value={data.address}
            placeholder="Type your delivery address here..."
          />
        </div>

        {/* <DropIn
          options={{
            // authorization: data.clientToken,
            paypal: {
              flow: "vault",
            },
          }}
          onInstance={(instance) => (data.instance = instance)}
        /> */}

        <div>
          <div style={{ textAlign: "center" }}>
            <DropIn
              options={{
                authorization:
                  "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiI5YTk5OGE1OWUxOWIwMjI5OGViMTlhYWRhMTBmYzQ0ZjM4YmM3ZDkxYWI2NzczZTY2MDg1YTNmOGE5MTE5MjBlfGNyZWF0ZWRfYXQ9MjAxNy0wNS0xNlQxMDoyMDoyMi4wMTU5NTc5NTMrMDAwMFx1MDAyNm1lcmNoYW50X2FjY291bnRfaWQ9NmNzaGhzNXp4dzV0cnB2c1x1MDAyNm1lcmNoYW50X2lkPWN6dGdjcnBiNXN4eGI3ajhcdTAwMjZwdWJsaWNfa2V5PWZ3bWZmOWpzOHR4cnhyNHAiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvY3p0Z2NycGI1c3h4YjdqOC9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbImN2diJdLCJlbnZpcm9ubWVudCI6InNhbmRib3giLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvY3p0Z2NycGI1c3h4YjdqOC9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9jbGllbnQtYW5hbHl0aWNzLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20vY3p0Z2NycGI1c3h4YjdqOCJ9LCJ0aHJlZURTZWN1cmVFbmFibGVkIjpmYWxzZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiVGFwcG9pbnRtZW50IiwiY2xpZW50SWQiOm51bGwsInByaXZhY3lVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vcHAiLCJ1c2VyQWdyZWVtZW50VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3RvcyIsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImFsbG93SHR0cCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOnRydWUsImVudmlyb25tZW50Ijoib2ZmbGluZSIsInVudmV0dGVkTWVyY2hhbnQiOmZhbHNlLCJicmFpbnRyZWVDbGllbnRJZCI6Im1hc3RlcmNsaWVudDMiLCJiaWxsaW5nQWdyZWVtZW50c0VuYWJsZWQiOnRydWUsIm1lcmNoYW50QWNjb3VudElkIjoiNmNzaGhzNXp4dzV0cnB2cyIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiY3p0Z2NycGI1c3h4YjdqOCIsInZlbm1vIjoib2ZmIiwiYXBwbGVQYXkiOnsic3RhdHVzIjoibW9jayIsImNvdW50cnlDb2RlIjoiVVMiLCJjdXJyZW5jeUNvZGUiOiJVU0QiLCJtZXJjaGFudElkZW50aWZpZXIiOiJtZXJjaGFudC5jb20udGFwcG9pbnRtZW50Iiwic3VwcG9ydGVkTmV0d29ya3MiOlsidmlzYSIsIm1hc3RlcmNhcmQiLCJhbWV4IiwiZGlzY292ZXIiXX0sIm1lcmNoYW50QWNjb3VudElkIjoiNmNzaGhzNXp4dzV0cnB2cyJ9",

                // paypal: {
                //   flow: "vault",
                // },
              }}
            />
            <button>Buy Now!</button>
          </div>
        </div>
      </div>
    </div>
  );

  //   const showLoading = (loading) =>
  //     loading && <h2 className="text-danger">Loading...</h2>;

  return (
    <>
      {/* <h2>Total: ${getTotal()}</h2> */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* <div className="row "> */}
      {/* <div className="col-4"> */}
      {/* <div> */}
      <div className="mr-n5">
        <div className="card text-center">
          <div className="card-body">
            <Link to="" className="btn btn-primary btn-block ">
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
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* {showLoading(data.loading)} */}
      {/* {showSuccess(data.success)} */}
      {/* {showError(data.error)} */}
      {/* {showCheckout()} */}
      {/* {showDropIn()} */}
    </>
  );
};

export default Checkout;
