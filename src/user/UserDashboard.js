import React from "react";
import { isAuthenticated } from "../components/apiCore";
import Header from "../components/Header";

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
          {/* <hr /> */}
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role == 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children,
  }) => (
    <div>
      <div className="jumbotron">
        <h2>{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
  );

  const purchaseHistory = (history) => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Purchase history</h3>
        <ul className="list-group"> </ul>
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
        <div className="row justify-content-center">
          {/* <div className="col-3">{"userLinks()"}</div> */}
          <div className="col-9">
            {userInfo()}
            {/* {"purchaseHistory(history)"} */}
          </div>
        </div>
        {purchaseHistory()}
      </Layout>
    </>
  );
};

export default UserDashboard;
