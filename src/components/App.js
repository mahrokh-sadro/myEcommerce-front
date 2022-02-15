import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import RegistrationPage from "../pages/RegistrationPage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductDescriptionPage from "../pages/ProductDescriptionPage";
import LoginPage from "../pages/LoginPage";
import ProductCategoryPage from "../pages/ProductCategoryPage";
import CartPage from "../pages/CartPage";
import MyContext from "../context/Context";
import PaymentPage from "../pages/PaymentPage";
import Dashboard from "../user/UserDashboard";
import AdminDashboard from "../user/AdminDashboard";
import AdminRoute from "../auth/AdminRoute";
import PrivateRoute from "../auth/PrivateRoute";
import Profile from "../user/Profile";

const App = () => {
  const [products, setProducts] = useState([{}]);
  const [count, setCount] = useState(1);

  return (
    <Router>
      <MyContext.Provider value={{ count, setCount }}>
        <Routes>
          <Route exact path="/">
            <HomePage products={products} setProducts={setProducts} />
          </Route>

          <Route exact path="/products">
            <ProductListingPage products={products} setProducts={setProducts} />
          </Route>

          <Route exact path="/registr">
            <RegistrationPage />
          </Route>

          <Route exact path="/signin" element={<LoginPage />} />
          {/* <LoginPage />
          </Route> */}

          <Route exact path="/b/:category" element={<ProductCategoryPage />} />
          {/* <ProductCategoryPage />
          </Route> */}

          <Route
            exact
            path="/product/details/:id"
            element={<ProductDescriptionPage />}
          />
          {/* <ProductDescriptionPage />
          </Route> */}

          <Route exact path="/cart" element={<CartPage />} />
          {/* <CartPage />
          </Route> */}

          <Route exact path="/payment" element={<PaymentPage />} />
          {/* <PaymentPage />
          </Route> */}

          <PrivateRoute path="/user/dashboard" exact component={Dashboard} />

          <AdminRoute
            path="/admin/dashboard"
            exact
            component={AdminDashboard}
          />

          <PrivateRoute path="/profile/:userId" exact component={Profile} />
        </Routes>
      </MyContext.Provider>
    </Router>
  );
};

export default App;
