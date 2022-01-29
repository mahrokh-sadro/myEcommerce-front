import * as React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { itemTotal } from "./cartHelpers";

const isActive = (path) => {
  if (window.location.pathname === path) {
    return { color: "red" };
  } else {
    return { color: "#ffffff" };
  }
};
console.log("window.location:" + window.location.pathname);

function Header(props) {
  const items = itemTotal();
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Link to="/products" style={isActive("/products")}>
          <Button size="small">Products Listing</Button>
        </Link>

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <Link to="/">My Shop Cart</Link>
        </Typography>
        {/* 
        <Link to="/cart">
          <Badge badgeContent={items} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Link> */}

        {/* 
        <input
          type="search"
          className="search"
          placeholder={props.placeholder}
          onChange={props.handleChange}
        /> */}

        <Link to="/registration">
          <Button
            variant="outlined"
            size="small"
            style={{ marginRight: "1rem" }}
          >
            Sign up
          </Button>
        </Link>
        <Link to="/login">
          <Button variant="outlined" size="small">
            Log in
          </Button>
        </Link>
        <Link to="/cart">
          <Badge badgeContent={items} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
