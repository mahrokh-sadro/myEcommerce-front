import React from "react";
import { Link } from "react-router-dom";

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

const ProductListItem = (props) => {
  const classes = useStyles();

  return (
    <Link to={`/product/details/${props.product._id}`}>
      <Card className={classes.root}>
        <img
          src={props.product.photoURL}
          alt=""
          style={{ "max-height": "17rem", "object-fit": "cover" }}
        />

        <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ${props.product.price}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: props.product.description }}
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
      </Card>
    </Link>
  );
};

export default ProductListItem;
