import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { addItem, updateItem } from "./cartHelpers";
import CartPage from "../pages/CartPage";
import MyContext from "../context/Context";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "../assets/css/ProductStyles";

const Cardd = ({ product }) => {
  const classes = useStyles();

  const [redirect, setRedirect] = useState(false);
  const { count, setCount } = useContext(MyContext);

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const addToCart = () => {
    console.log("added");
    addItem(product, () => {
      setRedirect(true);
    });
  };

  return (
    <>
      <Card className={classes.root}>
        <Link to={`/product/details/${product._id}`}>
          {shouldRedirect(redirect)}
          <img
            src={product.photoURL}
            alt="..."
            style={{ maxHeight: "17rem", "object-fit": "cover" }}
          />

          <CardContent>
            <div className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                ${product.price}
              </Typography>
            </div>
            <Typography
              dangerouslySetInnerHTML={{ __html: product.description }}
              variant="body2"
              color="textSecondary"
              component="p"
            />
          </CardContent>
        </Link>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart" onClick={addToCart}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Cardd;
