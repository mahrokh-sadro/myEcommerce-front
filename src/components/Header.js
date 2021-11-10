// import * as React from 'react';
// import { Link } from "react-router-dom";
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';
// import Button from '@mui/material/Button';








// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
// }));


// const Header = () => {
//     return (
//         <>
//             <Box sx={{ flexGrow: 1 }}>
//                 <AppBar position="static">
//                     <Toolbar>
//                         <Button >
//                             <Typography
//                                 variant="h6"
//                                 noWrap
//                                 component="div"
//                                 sx={{ display: { xs: 'none', sm: 'block' } }}
//                             >
//                                 <Link to="/">
//                                     MYLOGO</Link>
//                             </Typography>
//                         </Button>
//                         <Search>
//                             <SearchIconWrapper>
//                                 <SearchIcon />
//                             </SearchIconWrapper>
//                             <StyledInputBase
//                                 placeholder="Search…"
//                                 inputProps={{ 'aria-label': 'search' }}
//                             />
//                         </Search>
//                         <Button color="inherit"><Link to="/registration">Sign Up</Link></Button>
//                         <Button color="inherit"><Link to="/products">Products</Link></Button>
//                     </Toolbar>

//                 </AppBar>
//             </Box >

//         </>
//     )
// }

import * as React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';



function Header(props) {

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Link to="/products">
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
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Link to="/registration">
                    <Button variant="outlined" size="small" style={{ "marginRight": "1rem" }}>
                        Sign up
          </Button>
                </Link>
                <Link to="/login">
                    <Button variant="outlined" size="small">
                        Log in
          </Button>
                </Link>
            </Toolbar>
        </React.Fragment>
    )
}

Header.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }),
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default Header
