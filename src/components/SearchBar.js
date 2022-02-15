import React, { useState, useEffect } from "react";
import { listByCategory } from "./apiCore";

const SearchBar = () => {
  const [thedata, setTheData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false,
  });

  const { categories, category, search, results, searched } = thedata;

  useEffect(() => {
    fetch(`https://eemart.herokuapp.com/products/categories`)
      .then((res) => res.json())
      .then((json) => {
        setTheData({ ...thedata, categories: json.data });
      })
      .catch((err) => console.log(err));
  }, []);

  const searchData = () => {
    if (search) {
      fetch(`https://eemart.herokuapp.com/products?category=${search}`)
        .then((res) => {
          res.json();
          console.log(search);
        })
        .then((json) => {
          console.log(json);
        })
        .catch((err) => console.log(err));
    }
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    searchData();
  };

  const handleChange = (name) => (event) => {
    setTheData({ ...thedata, [name]: event.target.value, searched: false });
  };

  return <div className="row"></div>;
};

export default SearchBar;
