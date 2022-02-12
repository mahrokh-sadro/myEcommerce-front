import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../components/apiCore";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { getPurchaseHistory } from "../components/apiCore";

const UserDashboard = () => {
  const [history, setHistory] = useState([]);

  const {
    user: { _id, firstName, email, role },
  } = isAuthenticated();

  const token = isAuthenticated().token;

  const init = (userId, token) => {
    getPurchaseHistory(userId, token).then((data) => {
      if (data.err) {
        console.log(data.error);
      } else {
        setHistory(data);
      }
    });
  };

  useEffect(() => {
    init(_id, token);
  }, []);

  const userInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{firstName}</li>

          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role == 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  const purchaseHistory = (history) => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Purchase history</h3>
        <ul className="list-group"> </ul>
      </div>
    );
  };

  const userLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">User Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
              My Cart
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to={`/profile/${_id}`}>
              Update Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <Header />
      <Layout
        title="Dashboard"
        description={`G'day ${firstName}!`}
        className="container-fluid mt-1"
      >
        <div className="row">
          <div className="col-lg-9   col-sm-12">
            {userInfo()}
            {/* {purchaseHistory(history)} */}
          </div>
          <div className="col-lg-3   col-sm-12">{userLinks()}</div>
        </div>
      </Layout>
    </>
  );
};

export default UserDashboard;
