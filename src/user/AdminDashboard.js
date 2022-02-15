import React from "react";
import Layout from "../components/Layout";
import { isAuthenticated } from "../components/apiCore";
import { Link } from "react-router-dom";
import Header from "../components/Header";
const AdminDashboard = () => {
  const {
    user: { _id, firstName, email, role },
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Admin Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/create/product">
              Create Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/admin/orders">
              View Orders
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/admin/products">
              Manage Products
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{firstName}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 1 ? "Admin" : "Registered User"}
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
        className="container-fluid"
      >
        <div className="row">
          <div className="col-3">{adminLinks()}</div>
          <div className="col-9">{adminInfo()}</div>
        </div>
      </Layout>
    </>
  );
};

export default AdminDashboard;
