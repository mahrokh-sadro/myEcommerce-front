import queryString from "query-string";
// import { errorHandler } from "../../../backend/helpers/dbErrorHandler";

export const getFilteredProducts = (skip, limit, filters = {}) => {
  const data = {
    limit,
    skip,
    filters,
  };
  return fetch(`http://localhost:5000/products/by/search`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// export const listByCategory = (params) => {
//   const query = queryString.stringify(params);
//   console.log("query", query);
//   return fetch(`${API}/products/search?${query}`, {
//     method: "GET",
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

export const signin = (user) => {
  return fetch(`http://localhost:5000/auth/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getBraintreeClientToken = (userId, token) => {
  return fetch(`http://localhost:5000/braintree/getToken/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const processPayment = (userId, token, paymentData) => {
  return fetch(`http://localhost:5000/braintree/payment/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(paymentData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createOrder = (userId, token, createOrderData) => {
  return fetch(`http://localhost:5000/order/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ order: createOrderData }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
    return fetch(`http://localhost:5000/auth/signout`)
      .then((res) => console.log("signout", res))
      .catch((err) => console.log(err));
  }
};

export const getPurchaseHistory = (userId, token) => {
  return fetch(`https://eemart.herokuapp.com/orders/by/user/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      console.log("----------------------->" + res);
      res.json();
      console.log("----------------------->" + res);
    })
    .catch((err) => console.log(err));
};
