import * as React from "react";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { itemTotal } from "./cartHelpers";
import { signout, isAuthenticated } from "./apiCore";

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

        <Link to="/cart">
          <Badge badgeContent={items} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;
