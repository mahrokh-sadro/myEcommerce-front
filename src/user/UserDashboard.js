import React from "react";
import { isAuthenticated } from "../components/apiCore";
import Header from "../components/Header";
import Layout from "../components/Layout";

const UserDashboard = () => {
  const {
    user: { _id, firstName, email, role },
  } = isAuthenticated();

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

  const userLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">User Links</h4>
        <ul className="list-group" style={{ minHeight: "148px" }}></ul>
      </div>
    );
  };

  return (
    <>
      <Header />
      <Layout
        title="Dashboard"
        description={`Hello ${firstName}!`}
        className="container-fluid mt-1"
      >
        <div className="row">
          <div className="col-lg-9   col-sm-12">{userInfo()}</div>
          <div className="col-lg-3   col-sm-12">{userLinks()}</div>
        </div>
      </Layout>
    </>
  );
};

export default UserDashboard;
