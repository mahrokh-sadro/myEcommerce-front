import React from "react";
import { useEffect, useState } from "react";

import ProductListByCatItem from "../components/ProductListByCatItem";
import useStyles from "../assets/css/ProductStyles";
import Grid from "@material-ui/core/Grid";

const ProductCategoryPage = () => {
  const path = window.location.pathname;
  console.log(path);
  let arr = [];
  arr = path.split("/");
  console.log(arr[2]);
  let cat = arr[2];

  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    //communicate with the backend!
    fetch(`https://eemart.herokuapp.com/products?category=${cat}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        //We updated the data returned from the Backed with the resort state
        setProducts(json.data);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);
  const classes = useStyles();

  return (
    <div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="left" spacing={4}>
          {products.map((product) => (
            <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
              <ProductListByCatItem product={product} />
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
};

export default ProductCategoryPage;
