import React, { useEffect, useState } from "react";
import { getCart } from "../components/cartHelpers";
import { Link, Redirect } from "react-router-dom";
import { addItem, updateItem } from "../components/cartHelpers";
import CartCard from "../components/CartCard";
import Checkout from "../components/Checkout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CartPage = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  const showItems = (items) => {
    return (
      <div>
        {/* <h2>Your cart has {`${items.length}`} items</h2> */}
        {/* <hr /> */}
        {items.map((product, i) => (
          <CartCard
            key={i}
            product={product}
            // showAddToCartButton={false}
            // cartUpdate={true}
            // showRemoveProductButton={true}
            setRun={setRun}
            run={run}
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

  return (
    <>
      <Header />
      <div className="mt-5 ">
        <div className="row m-auto">
          {/* <div className="col-lg-8 col-md-auto col-sm-12 ml-5 "> */}
          <div className="col-lg-8 col-md-auto col-sm-12 ml-2 ">
            {items.length > 0 ? showItems(items) : noItemsMessage()}
            {/* sss */}
          </div>

          <div className="col-lg-3 col-md-auto col-sm-12 ">
            <Checkout products={items} />
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default CartPage;


