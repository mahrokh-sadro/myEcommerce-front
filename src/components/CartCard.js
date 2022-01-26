import React, { useContext } from "react";
import { addItem, updateItem } from "../components/cartHelpers";

import MyContext from "../context/Context";

const CartCard = ({ product }) => {
  const { count, setCount } = useContext(MyContext);
  const value = product.count;

  const handleChange = (productId) => (event) => {
    // setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = () => {
    return (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Adjust Quantity</span>
          </div>
          <input
            type="number"
            className="form-control"
            value={product.count}
            onChange={handleChange(product._id)}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      {/* <div class="card mb-3" style="max-width: 540px;"> */}
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.photoURL}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            {/* <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p> */}
            <div>{showCartUpdateOptions()}</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default CartCard;
