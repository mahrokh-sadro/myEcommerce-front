import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import Radiobox from "./Radiobox";
import { prices } from "./fixedPrices";
import { getFilteredProducts } from "./apiCore";
import Cardd from "./Card";
import useStyles from "../assets/css/ProductStyles";
import Grid from "@material-ui/core/Grid";
const Filter = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });

  const [categories, setCategories] = useState([]);
  const [limit, setLimit] = useState(9);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/products/categories`)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.data);
        setCategories(json.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.data);
        setFilteredResults(json.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const loadFilteredResults = (newFilters) => {
    // console.log(newFilters);
    getFilteredProducts(skip, limit, newFilters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const handleFilters = (filters, filterBy) => {
    // console.log("SHOP", filters, filterBy);
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy === "price") {
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
    }
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };

  const handlePrice = (value) => {
    const data = prices;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };
  const classes = useStyles();
  return (
    <>
      <div className="row">
        <div className="col-2 mt-5">
          <h4>Filter by categories</h4>
          <ul>
            <Checkbox
              categories={categories}
              handleFilters={(filters) => handleFilters(filters, "category")}
            />
          </ul>

          <h4>Filter by price range</h4>
          <div>
            <Radiobox
              prices={prices}
              handleFilters={(filters) => handleFilters(filters, "price")}
            />
          </div>
        </div>

        {/* {JSON.stringify(filteredResults)} */}
        <div className="col-10">
          {/* <h2 className="mb-4">Products</h2> */}
          <div className="row">
            {/* {filteredResults.map((product, i) => (
              <div key={i} className="col-4 mb-3">
                <Cardd product={product} />
              </div>
            ))} */}
            <div className={classes.content}>
              <div className={classes.toolbar} />
              <Grid container justify="left" spacing={4}>
                {filteredResults.map((product) => (
                  <Grid key={product._id} item xs={12} sm={6} md={6} lg={4}>
                    <Cardd product={product} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        {/* {loadMoreButton()} */}
      </div>
      {/* </div> */}
    </>
  );
};

export default Filter;
