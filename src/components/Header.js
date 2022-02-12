import * as React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
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
import { signout, isAuthenticated } from "./apiCore";

console.log("window.location:" + window.location.pathname);

function Header(props) {
  const items = itemTotal();
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Link to="/products">
          <Button variant="outlined" size="small">
            Products Listing
          </Button>
        </Link>

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <Link to="/">Emart</Link>
        </Typography>
        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <Link to="/user/dashboard">
            <Button
              variant="outlined"
              size="small"
              style={{ marginRight: "1rem" }}
            >
              Dashboard
            </Button>
          </Link>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <Link to="/admin/dashboard">
            <Button
              variant="outlined"
              size="small"
              style={{ marginRight: "1rem" }}
            >
              Dashboard
            </Button>
          </Link>
        )}
        {!isAuthenticated() && (
          <>
            <Link to="/registr">
              <Button
                variant="outlined"
                size="small"
                style={{ marginRight: "1rem" }}
              >
                Sign up
              </Button>
            </Link>
            <Link to="/signin">
              <Button
                variant="outlined"
                size="small"
                style={{ marginRight: "1rem" }}
              >
                Log in
              </Button>
            </Link>
          </>
        )}
        {isAuthenticated() && (
          <Link to="/">
            <Button
              variant="outlined"
              size="small"
              style={{ marginRight: "1rem" }}
              onClick={signout}
            >
              Logout
            </Button>
          </Link>
        )}
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
        <Link to="/cart">
          <Badge badgeContent={items} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </Toolbar>
    </React.Fragment>
  );
}

// Header.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Header;
