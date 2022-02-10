import React, { useContext } from "react";
import { addItem, updateItem } from "../components/cartHelpers";
import { Link, Redirect } from "react-router-dom";
import MyContext from "../context/Context";
import Checkout from "./Checkout";
import { removeItem } from "./cartHelpers";

const CartCard = ({ product, setRun = (f) => f, run = undefined }) => {
  const { count, setCount } = useContext(MyContext);
  setCount(product.count);

  const handleChange = (productId) => (event) => {
    // event.preventDefault();
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = () => {
    return (
      <form class="form-inline">
        <input
          class="form-control text-center me-3"
          id="inputQuantity"
          type="number"
          value={product.count}
          style={{ width: "4rem" }}
          onChange={handleChange(product._id)}
        />
        <div class="col-auto">
          <div class=" mb-2">
            <Link
              to="#"
              class="form-check-label"
              for="autoSizingCheck"
              onClick={() => {
                removeItem(product._id);
                setRun(!run); // run useEffect in parent Cart
              }}
            >
              Remove
            </Link>
          </div>
        </div>
      </form>
    );
  };

  return (
    <>
      <div class="card mb-3 ml-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.photoURL}
              className="img-fluid rounded-start"
              alt="img"
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as.
              </p>
              <div>{showCartUpdateOptions()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
