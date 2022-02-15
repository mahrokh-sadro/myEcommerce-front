import React from "react";

import { Card, CardContent, Typography } from "@material-ui/core";

import useStyles from "../assets/css/ProductStyles";

const ProductListByCatItem = (props) => {
  const classes = useStyles();
  return (
    <div>
      <a href={`/product/details/${props.product._id}`}>
        <Card className={classes.root}>
          <img
            src={props.product.photoURL}
            alt=""
            style={{ "max-height": "17rem" }}
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
        </Card>
      </a>
    </div>
  );
};

export default ProductListByCatItem;
