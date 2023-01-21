import React, { useEffect, useState } from "react";
import { getCart } from "../components/cartHelpers";
import { Link } from "react-router-dom";
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
        {items.map((product, i) => (
          <CartCard key={i} product={product} setRun={setRun} run={run} />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to="/products">Continue shopping</Link>
    </h2>
  );

  return (
    <>
      <Header />
      <div className="card-body p-4" style={{ backgroundColor: "#C0C0C0" }}>
        <div className="text-center">
          <div className="mt-5 ">
            <div className="row m-auto">
              <div className="col-lg-8 col-md-auto col-sm-12 ml-2 ">
                {items.length > 0 ? showItems(items) : noItemsMessage()}
              </div>
              <div className="col-lg-3 col-md-auto col-sm-12 ">
                <Checkout products={items} />
              </div>
            </div>
          </div>
          <br />
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
