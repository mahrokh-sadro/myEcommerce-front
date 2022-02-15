import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import Radiobox from "./Radiobox";
import { prices } from "./fixedPrices";
import { getFilteredProducts } from "./apiCore";
import Cardd from "./Cardd";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://eemart.herokuapp.com/products/categories`)
      .then((res) => res.json())
      .then((json) => {
        setCategories(json.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`https://eemart.herokuapp.com/products`)
      .then((res) => res.json())
      .then((json) => {
        setFilteredResults(json.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const loadFilteredResults = (newFilters) => {
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
  if (loading) {
    return (
      <div className="text-center mt-5 ml-n5">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="row mr-1 ml-1">
        <div className="col-2 mt-5">
          <h6>Filter by categories</h6>
          <ul>
            <Checkbox
              categories={categories}
              handleFilters={(filters) => handleFilters(filters, "category")}
            />
          </ul>

          <h6>Filter by price range</h6>
          <div>
            <Radiobox
              prices={prices}
              handleFilters={(filters) => handleFilters(filters, "price")}
            />
          </div>
        </div>

        <div className="col-10 ">
          <div className="row">
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
      </div>
    </>
  );
};

export default Filter;
