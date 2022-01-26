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
  // const [count, setCount] = useState(product.count);
  const { count, setCount } = useContext(MyContext);
  // setCount(product.count);
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

  // const handleChange = (productId) => (event) => {
  //   // setRun(!run); // run useEffect in parent Cart
  //   setCount(event.target.value < 1 ? 1 : event.target.value);
  //   if (event.target.value >= 1) {
  //     updateItem(productId, event.target.value);
  //   }
  // };

  // const showCartUpdateOptions = () => {
  //   return (
  //     <div>
  //       <div className="input-group mb-3">
  //         <div className="input-group-prepend">
  //           <span className="input-group-text">Adjust Quantity</span>
  //         </div>
  //         <input
  //           type="number"
  //           className="form-control"
  //           value={count}
  //           onChange={handleChange(product._id)}
  //         />
  //       </div>
  //     </div>
  //   );
  // };

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
        {/* { if(render){<CartPage />}} */}
        {/* {render ? <CartPage abs="hi" /> : ""} */}
        {/* {showCartUpdateOptions()} */}
      </Card>
    </>
  );
  //   <div>{product.price}</div>;
};

export default Cardd;
