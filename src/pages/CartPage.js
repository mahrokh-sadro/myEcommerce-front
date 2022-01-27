import React, { useEffect, useState } from "react";
import { getCart } from "../components/cartHelpers";
import { Link, Redirect } from "react-router-dom";
import { addItem, updateItem } from "../components/cartHelpers";
import CartCard from "../components/CartCard";
import Checkout from "../components/Checkout";

const CartPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  // const showItems = (items) => {
  //   return (
  //     <div>
  //       <h2>Youe cart has {`${items.length}`} items</h2>
  //       <hr />
  //       {items.map((item, i) => (
  //         <div>
  //           <div>{item.name + " "}</div>
  //           <div>{item.category + " "}</div>
  //           <div> increment/decrement </div>
  //           <div> </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };
  const showItems = (items) => {
    return (
      <div>
        <h2>Your cart has {`${items.length}`} items</h2>
        <hr />
        {items.map((product, i) => (
          <CartCard
            key={i}
            product={product}
            // showAddToCartButton={false}
            // cartUpdate={true}
            // showRemoveProductButton={true}
            // setRun={setRun}
            // run={run}
            // showCartUpdateOptions={showCartUpdateOptions()}
          />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
    </h2>
  );

  // const handleChange = (productId) => (event) => {
  //   // setRun(!run); // run useEffect in parent Cart
  //   setCount(event.target.value < 1 ? 1 : event.target.value);
  //   if (event.target.value >= 1) {
  //     updateItem(productId, event.target.value);
  //   }
  // };

  // const showCartUpdateOptions = () => {
  //   return (
  //     <div>
  //       <div className="input-group mb-3">
  //         <div className="input-group-prepend">
  //           <span className="input-group-text">Adjust Quantity</span>
  //         </div>
  //         <input
  //           type="number"
  //           className="form-control"
  //           value={count}
  //           onChange={handleChange(product._id)}
  //         />
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div>
      {" "}
      <div className="row">
        <div className="col-6">
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>

        <div className="col-6">
          <h2 className="mb-4">Your cart summary</h2>
          <hr />
          {/* <Checkout products={items} setRun={setRun} run={run} /> */}
          <Checkout products={items} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
