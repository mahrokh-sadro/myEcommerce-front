import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { addItem } from "./cartHelpers";

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
            alt=""
            style={{ "max-height": "17rem", "object-fit": "cover" }}
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
          {/* <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions> */}
        </Link>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart" onClick={addToCart}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
  //   <div>{product.price}</div>;
};

export default Cardd;
